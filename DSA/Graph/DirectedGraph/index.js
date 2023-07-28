const DiGraph = require('./Graph');

const main = function () {
    const g = new DiGraph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 3);
    g.printGraph();
}

main();