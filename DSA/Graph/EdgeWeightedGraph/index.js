const Graph = require('./Graph');
const PrimMST = require('./PrimMST');
const Edge = require('./Edge');
const KruskalMST = require('./KruskalMST');

const main = function() {
    const g = new Graph(8);
    g.addEdge(new Edge(4, 5, 0.35));
    g.addEdge(new Edge(4, 7, 0.37));
    g.addEdge(new Edge(5, 7, 0.28));
    g.addEdge(new Edge(0, 7, 0.16));
    g.addEdge(new Edge(1, 5, 0.32));
    g.addEdge(new Edge(0, 4, 0.38));
    g.addEdge(new Edge(2, 3, 0.17));
    g.addEdge(new Edge(1, 7, 0.19));
    g.addEdge(new Edge(0, 2, 0.26));
    g.addEdge(new Edge(1, 2, 0.36));
    g.addEdge(new Edge(1, 3, 0.29));
    g.addEdge(new Edge(2, 7, 0.34));
    g.addEdge(new Edge(6, 2, 0.40));
    g.addEdge(new Edge(3, 6, 0.52));
    g.addEdge(new Edge(6, 0, 0.58));
    g.addEdge(new Edge(6, 4, 0.93));
    g.printGraph();

    const prim = new PrimMST(g);
    console.log();
    console.log(">>Prims MST<<");
    console.log();
    console.log("u v weight");
    while(!prim.mst.isEmpty()) {
        const edge = prim.mst.dequeue();
        console.log(edge.v, edge.w, edge.weight);
    }
    console.log();

    const kruskal = new KruskalMST(g);
    console.log();
    console.log(">>Kruskals MST<<");
    console.log();
    console.log("u v weight");
    while(!kruskal.mst.isEmpty()) {
        const edge = kruskal.mst.dequeue();
        console.log(edge.v, edge.w, edge.weight);
    }
    console.log();

}

main();