const UndirectedGraph = require('./Graph');
const DepthFirstSearch = require('./DepthFirstSearch');
const BreadthFirstSearch = require('./BreadthFirstSearch');
const ConnectedComponents = require('./ConnectedComponents');

const main = function () {
    const g = new UndirectedGraph(6);
    g.addEdge(0, 4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(4, 5);
    g.printGraph();
    console.log();
    console.log(">>DFS<<")
    const source = 0;
    const destination = 5;
    const DFS = new DepthFirstSearch(g, source);
    for (let i = 0; i < 6; i++) {
        if (DFS.marked[i]) console.log(i, " is reachable from ", source);
        else console.log(i, " is not reachable from ", source);
    }
    console.log();
    console.log(">>DFS Path<<");
    const path = DFS.pathTo(destination);
    if (path != null) {
        while (!path.isEmpty()) {
            console.log(path.pop());
        }
    } else {
        console.log("No path exist from ", source, " to ", destination);
    }
    console.log();
    console.log(">>Connected Components<<");
    const CC = new ConnectedComponents(g);
    console.log("Number of Components: ",CC.count);
    console.log("Number of Components: ",CC.isConnected(4, 3));

    console.log();
    console.log(">>BFS<<");
    const BFS = new BreadthFirstSearch(g, source);
    for (let i = 0; i < 6; i++) {
        if (BFS.marked[i]) console.log(i, " is reachable from ", source);
        else console.log(i, " is not reachable from ", source);
    }

    console.log();
    console.log(">>BFS Path<<");
    const path2 = BFS.pathTo(destination);
    if (path2 != null) {
        while (!path2.isEmpty()) {
            console.log(path2.pop());
        }
    } else {
        console.log("No path exist from ", source, " to ", destination);
    }

}

main();