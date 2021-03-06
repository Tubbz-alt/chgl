use RangeChunk;
use CyclicDist;
use Time;
use Sort;
use CommDiagnostics;

config const dataset = "../data/ca-GrQc.mtx_csr.bin";
config const numEdgesPresent = true;
config const printTiming = true;
config const isOptimized = false;
config const arrayGrowthRate = 1.5;
config const aggregationThreshold = 1024;
config const parGranularity = 64;
config const maxInnerTasks = here.maxTaskPar;
config const ignoreRunning = true;

iter roundRobin(dom) {

}

iter roundRobin(dom, param tag : iterKind) ref where tag == iterKind.standalone {
  coforall loc in Locales do on loc {
    coforall tid in 0..#here.maxTaskPar {
      const localSubdomain = dom.localSubdomain();
      var _dom = localSubdomain by here.maxTaskPar align (localSubdomain.stride * tid + localSubdomain.alignment);
      for v in _dom do yield v;
    }
  }
}

proc isLocalArray(A : []) : bool {
  return A.locale == here && A._value.dom.locale == here;
}

/*
  Obtains the intersection size of two arrays, A and B. This method is optimized for
  locality and will copy any remote arrays to be entirely local; this includes
  a locality check for the array and the domain itself (which will be remote if
  the user creates an implicit copy).
*/
proc intersectionSize(A : [] ?t, B : [] t) {
  if isLocalArray(A) && isLocalArray(B) {
    return _intersectionSize(A, B);
  } else if isLocalArray(A) && !isLocalArray(B) {
    const _BD = B.domain; // Make by-value copy so domain is not remote.
    var _B : [_BD] t = B;
    return _intersectionSize(A, _B);
  } else if !isLocalArray(A) && isLocalArray(B) {
    const _AD = A.domain; // Make by-value copy so domain is not remote.
    var _A : [_AD] t = A;
    return _intersectionSize(_A, B);
  } else {
    const _AD = A.domain; // Make by-value copy so domain is not remote.
    const _BD = B.domain;
    var _A : [_AD] t = A;
    var _B : [_BD] t = B;
    return _intersectionSize(_A, _B);
  }
}

pragma "no doc"
proc _intersectionSize(A : [] ?t, B : [] t) {
  var match : int;
  local {
    var idxA = A.domain.low;
    var idxB = B.domain.low;
    while idxA <= A.domain.high && idxB <= B.domain.high {
      const a = A[idxA];
      const b = B[idxB];
      if a == b { 
        match += 1;
        idxA += 1; 
        idxB += 1; 
      }
      else if a > b { 
        idxB += 1;
      } else { 
        idxA += 1;
      }
    }
  }
  return match;
}

pragma "default intent is ref"
record Array {
  type eltType;
  var dom = {0..0};
  var arr : [dom] eltType;
  var sz : int;
  var cap : int = 1;

  iter these() {
    if sz != 0 {
      if this.locale != here {
        var _dom = {0..#sz};
        var _arr : [_dom] eltType = arr;
        for a in arr[0..#sz] do yield a;
      } else {
        for a in arr[0..#sz] do yield a;
      }
    }
  }

  iter these(param tag : iterKind) where tag == iterKind.standalone {
    if sz != 0 then
      if this.locale != here {
        var _dom = {0..#sz};
        var _arr : [_dom] eltType = arr;
        forall a in arr[0..#sz] do yield a;
      } else {
        forall a in arr[0..#sz] do yield a;
      }
  }
  
  proc append(ref other : this.type) {
    const otherSz = other.sz;
    if otherSz == 0 then return;
    local { 
      if sz + otherSz > cap {
        this.cap = sz + otherSz;
        this.dom = {0..#cap};
      }
    }
    this.arr[sz..#otherSz] = other.arr[0..#otherSz];
    sz += otherSz;
  }

  proc append(elt : int) {
    local {
      if sz == cap {
        var oldCap = cap;
        cap = round(cap * arrayGrowthRate) : int;
        if oldCap == cap then cap += 1;
        this.dom = {0..#cap};
      }
    
      this.arr[sz] = elt;
      sz += 1;
    }
  }

  proc this(idx) return arr[idx];

  pragma "no copy return"
  proc getArray() {
    return arr[0..#sz];
  }

  proc clear() {
    local do this.sz = 0;
  }

  proc size return sz;
}

try! {
  var f = open(dataset, iomode.r, style = new iostyle(binary=1));   
  var reader = f.reader();
  var timer = new Timer();
  timer.start();

  // Read in |V| and |E|
  var numVertices : uint(64);
  var numEdges : uint(64);
  reader.read(numVertices);
  writeln("|V| = " + numVertices);
  if numEdgesPresent {
    reader.read(numEdges);
    writeln("|E| = " + numEdges);
  }
  reader.close();
  f.close();
  
  var D = {0..#numVertices} dmapped Cyclic(startIdx=0);
  var A : [D] Array(int);
  
  // On each node, independently process the file and offsets...
  coforall loc in Locales do on loc {
    var f = open(dataset, iomode.r, style = new iostyle(binary=1));    
    // Obtain offset for indices that are local to each node...
    var dom = D.localSubdomain();
    coforall chunk in chunks(dom.low..dom.high by dom.stride align dom.alignment, here.maxTaskPar) {
      var reader = f.reader(locking=false);
      for idx in chunk {
        reader.mark();
        // Open file again and skip to portion of file we want...
        const headerOffset = if numEdgesPresent then 16 else 8;
        reader.advance(headerOffset + idx * 8);

        // Read our beginning and ending offset... since the ending is the next
        // offset minus one, we can just read it from the file and avoid
        // unnecessary communication with other nodes.
        var beginOffset : uint(64);
        var endOffset : uint(64);
        reader.read(beginOffset);
        reader.read(endOffset);
        endOffset -= 1;

        // Advance to current idx's offset...
        var skip = ((numVertices - idx:uint - 1:uint) + beginOffset) * 8;
        reader.advance(skip:int);

        // Pre-allocate buffer for vector and read directly into it
        A[idx].dom = {0..#(endOffset - beginOffset + 1)};
        reader.readBytes(c_ptrTo(A[idx].arr[0]), ((endOffset - beginOffset + 1) * 8) : ssize_t);
        A[idx].sz = A[idx].dom.size;
        A[idx].cap = A[idx].dom.size;
        sort(A[idx].arr);
        reader.revert();
      }
    }
  }
  timer.stop();
  if printTiming then writeln("Initialized: ", timer.elapsed());
  timer.clear();

  timer.start();
  // TODO: Have a more complex and aggregated version that sends the array as well as
  // requested indices to the locales it needs to communicate with to avoid the need
  // to copy.
  var numTriangles : int;
  if !isOptimized {
    forall v in roundRobin(A) with (+ reduce numTriangles) {
      forall u in A[v].arr.these(tasksPerLocale=maxInnerTasks, ignoreRunning=ignoreRunning, minIndicesPerTask=maxInnerTasks) with (+ reduce numTriangles) do if v < u {
        numTriangles += intersectionSize(A[v].arr, A[u].arr);
      }
    }
  } else {
    forall v in roundRobin(A) with (+ reduce numTriangles) {
      if A[v].size < aggregationThreshold || numLocales == 1 {
        for u in A[v] do if v < u {
          numTriangles += intersectionSize(A[v].arr, A[u].arr);
        }
      } else {
        // Aggregate outgoing neighbor intersections
        var work : [LocaleSpace] Array(int);
        for u in A[v] do if v < u {
          work[D.dist.idxToLocale(u).id].append(u);
        }
        coforall loc in Locales with (+ reduce numTriangles) do on loc {
          var ourWork = work[here.id];
          if ourWork.size != 0 {
            var dom = {0..#A[v].size};
            var arr : [dom] int = A[v].getArray();
            for u in ourWork {
              numTriangles += intersectionSize(arr, A[u].arr);
            }
          }
        }
      }
    }
  }
  timer.stop();
  writeln("|V| = ", numVertices, ", |E| = ", numEdges, ", numTriangles = ", numTriangles / 3);
  if printTiming then writeln("Time: ", timer.elapsed());
  f.close();
}
