module.exports = class Reachability {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.id = Array(this.V).fill(-1);
        this.visited = Array(this.V).fill(false);
        let count = 0;
        for (let v = 0; v < this.V; v++) {
            count++;
            if (!this.isVisited(v)) this.dfs(Graph, v, count);
        }
    }

    dfs(Graph, v, count) {
        this.visited[v] = true;
        this.id[v] = count;
        let currentVertex = Graph.list[v].head;
        while (currentVertex != null) {
            if (!this.isVisited(currentVertex.data)) {
                this.dfs(Graph, currentVertex.data, count);
            }
            currentVertex = currentVertex.next;
        }
    }

    isVisited(v) {
        return this.visited[v];
    }

    isConnected(source, destination) {
        return (this.id[source] == this.id[destination]);
    }

}