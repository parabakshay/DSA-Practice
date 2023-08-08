module.exports = class DirectedDepthFirstSearch {
    constructor(Graph) {
        this.visited = Array(Graph.numOfVertices()).fill(false);
        console.log("Visiting: ", 0);
        this.dfs(Graph, 0);
    }

    dfs(Graph, v) {
        this.visited[v] = true;
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!this.visited[currentVertex.data]) {
                console.log("Visiting: ", currentVertex.data);
                this.dfs(Graph, currentVertex.data);
            }
            currentVertex = currentVertex.next;
        }
    }

    isVisited(V) {
        return this.visited[V];
    }
}