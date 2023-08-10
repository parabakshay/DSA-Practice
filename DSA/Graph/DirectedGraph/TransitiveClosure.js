const DirectedDepthFirstPath = require('./DirectedDepthFirstPath');
module.exports = class TransitiveClosure {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.all = [];
        for(let v = 0; v < this.V; v++) {
            this.all[v] = new DirectedDepthFirstPath(Graph, v);
        }
    }

    reachable(source, destination) {
        return this.all[source].visited[destination];
    }
}