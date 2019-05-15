use Graph;
use WorkQueue;

config const numVertices = 1024;
config const numEdges = numVertices ** 2;

var graph = new Graph(1024, 1024 * 1024);
forall v1 in graph.getVertices() {
  forall v2 in graph.getVertices() {
    if v1.id != v2.id then graph.addEdge(v1, v2);
  }
}

var current = new WorkQueue(graph.vDescType);
var next = new WorkQueue(graph.vDescType);
var currTD = new TerminationDetector(1);
var nextTD = new TerminationDetector(0);
current.addWork(graph.toVertex(0));
var visited : [graph.verticesDomain] atomic bool;

var numPhases = 1;
while !current.isEmpty() {
  forall vertex in doWorkLoop(current, currTD) {
    for neighbor in graph.neighbors(vertex) {
      if visited[vertex.id].testAndSet() {
        continue;
      }
      nextTD.started(1);
      next.addWork(neighbor, graph.getLocale(neighbor));
    }
    currTD.finished(1);
  }
  next <=> current;
  nextTD <=> currTD;
  writeln("Finished phase #", numPhases);
  numPhases += 1;
}

