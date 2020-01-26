var b: [1..7, 1..11] int;
b(1,1) = 1;
b(1,2) = 1;
b(1,3) = 1;
b(1,4) = 1;
b(1,5) = 1;
b(2,1) = 1;
b(2,6) = 1;
b(2,7) = 1;
b(3,2) = 1;
b[3,6] = 1;
b[4,3] = 1;
b[4,7] = 1;
b[4,8] = 1;
b[4,9] = 1;
b[5,10] = 1;
b[6,4] = 1;
b[6,8] = 1;
b[6,10] = 1;
b[6,11] = 1;
b[7,5] = 1;
b[7,9] = 1;
b[7,11] = 1;
/*var b1 = 
      [[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
       [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
       [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
       [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
       [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
       [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1]];*/

// compilerWarning(b.type :string);

proc printmatrix(M) {
  for i in {1..M.domain.high(1)} {
    for j in {1..M.domain.high(2)} {
      write(M(i,j):string + " ");
    }
    writeln();
  }
}


proc IdentityMatrix(n) {
  var A : [1..n, 1..n] int;
  [i in A.domain.dim(1)] A[i,i] = 1;
  return A;
}

use List;
class Matrix2D {
  var N : int;
  var M : int;
  var _arr : [1..N, 1..M] int;
  proc init (row : int, col : int) {
    N = row;
    M = col;
  }
}

proc _get_next_pivot(M,s) {
  var dims = M.domain.high;
  var dimR = dims(1);
  var dimC = dims(2);
  for c in s..dimC {
    for r in s..dimR {
      if (M(r,c) != 0) {
	return (r,c);
      }
    }
  }
  return (-1,-1); // TODO: return
}


proc swap_rows(i, j, M) {  
  var N = M;
  N[i, ..] <=> N[j, ..]; 
  return N;
}

proc swap_columns(i, j, M) {  
  var N = M;
  N[.., i] <=> N[.., j]; 
  return N;
}

// Replaces row i (of M) with sum ri multiple of ith row and rj multiple of jth row
proc add_to_row(M, i, j, ri = 1, rj = 1, mod = 2) {
  var N = M;
  N[i, ..]  = (ri * N[i, ..] + rj * N[j, ..]) % mod;
  return N;
}


proc add_to_column(M, i, j, ci = 1, cj = 1, mod = 2) {
  var N = M;
  N[.., i]  = (ci * N[.., i] + cj * N[..,j]) % mod;
  return N;
}

proc matmultmod2 (M, N, mod = 2) {
  var nr = M.domain.high(1);
  var nc = N.domain.high(2);
  var m  = M.domain.high(2); 
  var C : [1..nr, 1..nc] atomic int;

  forall i in 1..nr {
    for j in 1..nc {
      C[i,j].write((+ reduce M[i, 1..m] * N[1..m, j]) % 2) ;
    }
  }
  return C.read();
}

proc matmultmod3 (M, N, mod = 2) {
  var C : [M.domain.dim(1), N.domain.dim(2)] atomic int;
  forall (i,j) in C.domain {
    C[i,j].write((+ reduce M[i, M.domain.dim(2)] * N[M.domain.dim(2), j]) % 2);
  }
  return C.read();
}

proc matmultmod (M, N, mod =2) {
  var C : [M.domain.dim(1), N.domain.dim(2)] int;
  forall (i,j) in C.domain {
    C[i,j] = (+ reduce (M[i, M.domain.dim(2)] * N[M.domain.dim(2), j])) % 2;
  }
  return C;
}

type listType = list(unmanaged Matrix2D?, true);
proc matmulreduce(arr : listType, reverse = false, mod = 2) {
  var P = arr(1)._arr;
  if (reverse) {
    for i in arr.size..1 by -1 {
      P = matmultmod(P, arr(i)._arr);
    }
  } else {
    for i in 1..arr.size {
      P = matmultmod(P, arr(i)._arr);
    }
  }
  return P;

}

printmatrix(b);

var dims = b.domain.high;
var dimL = dims(1);
var dimR = dims(2);
var minDim = if dimL <= dimR then dimL else dimR;
 
// writeln(dimL : string ); // dims give me the index set but I need the max value of the index set
// writeln(minDim);

var S  = b;
var IL = IdentityMatrix(dimL);
var IR = IdentityMatrix(dimR);

var Linv = new list(unmanaged Matrix2D?, true); // listOfMatrixTransformation
var Rinv = new list(unmanaged Matrix2D?, true); // listOfMatrixTransformation

var Linit = new unmanaged Matrix2D(IL.domain.high(1), IL.domain.high(2));
Linit._arr = IL;
Linv.append(Linit);
var Rinit = new unmanaged Matrix2D(IR.domain.high(1), IR.domain.high(2));
Rinit._arr = IR;
Rinv.append(Rinit);

var L = IL;
var R = IR;

/* writeln("###############"); */
/* writeln("L:"); */
/* printmatrix(L); */
/* writeln("###############"); */
/* writeln("R:"); */
/* printmatrix(R); */

// var rc = _get_next_pivot(b, 3);
// writeln(rc : string);


writeln("########");
for s in 1..minDim {
  writeln("Iteration: " +  s : string);
  var pivot = _get_next_pivot(S,s);
  var rdx : int, cdx : int;
  if (pivot(1) == -1 && pivot(2) == -1) {
    break;
  }
  else {
    (rdx, cdx) = pivot; 
  }
 
  // Swap rows and columns as needed so the 1 is in the s,s position
  if (rdx > s) {
    S = swap_rows(s, rdx, S);
    L = swap_rows(s, rdx, L);
    var tmp = swap_rows(s, rdx, IL);
    var LM = new unmanaged Matrix2D(tmp.domain.high(1), tmp.domain.high(2));
    LM._arr = tmp;
    Linv.append(LM);
  }
  if (cdx > s) {
    S = swap_columns(s, cdx, S);
    R = swap_columns(s, cdx, R);
    var tmp = swap_columns(s, cdx, IR);
    var RM = new unmanaged Matrix2D(tmp.domain.high(1), tmp.domain.high(2));
    RM._arr = tmp;
    Rinv.append(RM); 
  }

  // add sth row to every nonzero row & sth column to every nonzero column
  // zip(S[.., s], S.dim(1)) gives you (S[i,j], 1..N)
  // row_indices = [idx for idx in range(dimL) if idx != s and S[idx][s] == 1]
  // var RD: domain(2) = {1..dimL, 1..dimL};
  // var row_indices = [(x,(i,j)) in zip(S, 1..dimL)] if x == 1 && j != s then (i,j);
  // var row_indices = [(s,idx) in zip(S, {1..dimL})] if s == 1 then idx;

  var row_indices = [idx in 1..dimL] if (idx != s && S(idx,s) == 1) then idx;
  // compilerWarning(row_indices.type : string);

  for rdx in row_indices {
    // writeln("rdx: " + rdx : string);
    S = add_to_row(S, rdx, s);
    L = add_to_row(L, rdx, s);
    var tmp = add_to_row(IL, rdx, s);
    var LM = new unmanaged Matrix2D(tmp.domain.high(1), tmp.domain.high(2));
    LM._arr = tmp;
    Linv.append(LM);
  }

  var column_indices = [jdx in 1..dimR] if (jdx != s && S(s,jdx) == 1) then jdx;
 
  for (jdx,cdx) in zip(1..,column_indices) {// TODO: check
    // writeln("rdx: " + rdx : string);
    S = add_to_column(S, cdx, s);
    R = add_to_column(R, cdx, s);
    var tmp = add_to_column(IR, cdx, s);
    var RM = new unmanaged Matrix2D(tmp.domain.high(1), tmp.domain.high(2));
    RM._arr = tmp;
    Rinv.append(RM);
  }
}

writeln("###############");
writeln("L:");
printmatrix(L);
writeln("###############");
writeln("R:");
printmatrix(R);
writeln("###############");
writeln("S:");
printmatrix(S);

var LinvF = matmulreduce(Linv);
var RinvF = matmulreduce(Rinv, true, 2);
writeln("###############");
writeln("Linv:");
printmatrix(LinvF);
writeln("###############");
writeln("Rinv:");
printmatrix(RinvF);

