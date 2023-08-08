const DiGraph = require('./Graph');
const DirectedDFS = require('./DirectedDepthFirstSearch');
const DirectedBFS = require('./DirectedBreadthFirstSearch');
const Reachability = require('./Reachability');
const DirectedDepthFirstPath = require('./DirectedDepthFirstPath');
const DirectedBreadthFirstPath = require('./DirectedBreadthFirstPath');

const main = function () {
    const g = new DiGraph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 3);
    g.addEdge(3, 2);
    g.addEdge(2, 4);
    g.printGraph();
    console.log();
    console.log(">>Directed DFS<<");
    new DirectedDFS(g);

    console.log();
    console.log(">>Directed BFS<<");
    new DirectedBFS(g);

    console.log();
    console.log(">>Reachability<<");
    const dfs = new Reachability(g);
    console.log(dfs.isConnected(0, 4));

    console.log();
    console.log(">>Directed DFS Path<<");
    const source = 1;
    const dfsPath = new DirectedDepthFirstPath(g, source);
    let path = dfsPath.pathTo(4);
    while(!path.isEmpty()) console.log(path.pop());

    console.log();
    console.log(">>Directed BFS Path<<");
    const bfsPath = new DirectedBreadthFirstPath(g, source);
    let path2 = bfsPath.pathTo(4);
    while(!path2.isEmpty()) console.log(path2.pop());
}

main();