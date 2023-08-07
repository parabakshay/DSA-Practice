module.exports = class BiConnectivity {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.pre = Array(this.V).fill(-1);
        this.low = Array(this.V).fill(-1);
        this.articulation = Array(this.V).fill(false);
        this.count = 0;
        for (let v = 0; v < this.V; v++) {
            if (this.pre[v] == -1) {
                this.dfs(Graph, v, v);
            }
        }
    }
    dfs(Graph, u, v) {
        let children = 0;
        this.pre[v] = this.count++;
        this.low[v] = this.pre[v];
        let currentVertex = Graph.list[v].head;
        while (currentVertex != null) {
            if (this.pre[currentVertex.data] == -1) {
                children++;
                this.dfs(Graph, v, currentVertex.data);
                this.low[v] = Math.min(this.low[currentVertex.data], this.low[v]);
                if (this.pre[v] <= this.low[currentVertex.data] && u != v) {
                    this.articulation[v] = true;
                }
            } else if (u != currentVertex.data) {
                this.low[v] = Math.min(this.low[v], this.pre[currentVertex.data]);
            }
            currentVertex = currentVertex.next;
        }
        if (u == v && children > 1) this.articulation[v] = true;
    }

    isArticulation(v) {
        return this.articulation[v];
    }
}