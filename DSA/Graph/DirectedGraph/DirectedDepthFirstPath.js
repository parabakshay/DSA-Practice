const Stack = require('./../../Stack/Stack');
module.exports = class DirectedDepthFirstPath {
    constructor(Graph, source) {
        this.source = source;
        this.V = Graph.numOfVertices();
        this.visited = Array(this.V).fill(false);
        this.edgeTo = Array(this.V).fill(-1);
        this.dfs(Graph, source);
    }

    dfs(Graph, v, count) {
        this.setVisited(v);
        let currentVertex = Graph.list[v].head;
        while (currentVertex != null) {
            if (!this.isVisited(currentVertex.data)) {
                this.edgeTo[currentVertex.data] = v;
                this.dfs(Graph, currentVertex.data, count);
            }
            currentVertex = currentVertex.next;
        }
    }

    isVisited(V) {
        return this.visited[V];
    }

    setVisited(V) {
        return this.visited[V] = true;
    }

    pathTo(destination) {
        const path = new Stack();
        if (!this.isVisited(destination)) {
            path.push("No Path");
        } else {
            for (let x = destination; x != this.source; x = this.edgeTo[x]) {
                path.push(x);
            }
            path.push(this.source);
        }
        return path;
    }
}