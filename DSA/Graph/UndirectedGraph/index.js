const UndirectedGraph = require('./Graph');
const DepthFirstSearch = require('./DepthFirstSearch');
const BreadthFirstSearch = require('./BreadthFirstSearch');
const ConnectedComponents = require('./ConnectedComponents');
const Cycle = require('./Cycle');
const Bipartite = require('./Bipartite');
const Bridge = require('./Bridge');
const BiConnectivity = require('./BiConnectivity');

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

    console.log();
    console.log(">>Connected Components<<");
    const CC = new ConnectedComponents(g);
    console.log("Number of Components: ", CC.count);
    console.log("Number of Components: ", CC.isConnected(4, 3));


    console.log();
    console.log(">>Cycle Detection<<");
    const g1 = new UndirectedGraph(5);
    g1.addEdge(0, 1);
    g1.addEdge(1, 3);
    g1.addEdge(2, 3);
    g1.addEdge(3, 4);
    g1.addEdge(2, 4);
    g1.printGraph();
    const finder = new Cycle(g1);
    console.log("Is Cycle Present: ", finder.hasCycle());
    if (finder.hasCycle()) {
        console.log("Cycle Route:", );
        while (!finder.cycle.isEmpty()) {
            console.log(finder.cycle.pop());
        }
    }

    console.log();
    console.log(">>Bipartite Detection<<");
    const g2 = new UndirectedGraph(5);
    g2.addEdge(0, 3);
    g2.addEdge(1, 3);
    g2.addEdge(0, 4);
    g2.addEdge(2, 4);
    g2.printGraph();
    const B = new Bipartite(g2);
    console.log("Is Graph Bipartite: ", B.isBipartite());

    console.log();
    console.log(">>Bridge Detection<<");
    const g3 = new UndirectedGraph(6);
    g3.addEdge(0, 1);
    g3.addEdge(0, 2);
    g3.addEdge(1, 2);
    g3.addEdge(2, 3);
    g3.addEdge(3, 4);
    g3.addEdge(3, 5);
    g3.addEdge(4, 5);
    g3.addEdge(2, 5);
    g3.printGraph();
    const bridge = new Bridge(g3);
    console.log("Total components post deletion of bridge edges: " + bridge.components());
    console.log();
    console.log(">>BiConnectivity Detection<<");
    const g4 = new UndirectedGraph(5);
    g4.addEdge(0, 1);
    g4.addEdge(0, 2);
    g4.addEdge(1, 2);
    g4.addEdge(2, 3);
    g4.addEdge(3, 4);
    g4.addEdge(2, 4);
    g4.printGraph();
    const biConnectivity = new BiConnectivity(g4);
    for (let i = 0; i < 5; i++) {
        console.log("Is Vertex "+i+" an articulation point ? Ans -> ", biConnectivity.isArticulation(i));
    }

}

main();