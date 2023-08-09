const DiGraph = require('./Graph');
const DirectedDFS = require('./DirectedDepthFirstSearch');
const DirectedBFS = require('./DirectedBreadthFirstSearch');
const Reachability = require('./Reachability');
const DirectedDepthFirstPath = require('./DirectedDepthFirstPath');
const DirectedBreadthFirstPath = require('./DirectedBreadthFirstPath');
const DirectedCycle = require('./DirectedCycle');
const Topological = require('./Topological');

const main = function () {
    const g = new DiGraph(13);
    g.addEdge(2, 3);
    g.addEdge(0, 6);
    g.addEdge(0, 1);
    g.addEdge(2, 0);
    g.addEdge(11, 12);
    g.addEdge(9, 12);
    g.addEdge(9, 10);
    g.addEdge(9, 11);
    g.addEdge(3, 5);
    g.addEdge(8, 7);
    g.addEdge(5, 4);
    g.addEdge(0, 5);
    g.addEdge(6, 4);
    g.addEdge(6, 9);
    g.addEdge(7, 6);
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

    console.log();
    console.log(">>Directed Cycle<<");
    const g2 = new DiGraph(4);
    g2.addEdge(0, 2);
    g2.addEdge(0, 1);
    g2.addEdge(2, 0);
    g2.addEdge(1, 2);
    g2.addEdge(2, 3);
    const finder = new DirectedCycle(g2);
    while(!finder.cycle.isEmpty()) console.log(finder.cycle.pop());

    console.log();
    console.log(">>Topological Order<<");
    new Topological(g);
}

main();