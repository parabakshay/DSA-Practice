module.exports = class Bridge {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.pre = Array(this.V).fill(-1);
        this.low = Array(this.V).fill(-1);
        this.count = 0;
        this.bridge = 0;
        for (let v = 0; v < this.V; v++) {
            if (this.pre[v] == -1)
                this.dfs(Graph, v, v);
        }
    }

    dfs(Graph, u, v) {
        this.pre[v] = this.count++;
        this.low[v] = this.pre[v];
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(this.pre[currentVertex.data] == -1) {
                this.dfs(Graph, v, currentVertex.data);
                this.low[v] = Math.min(this.low[v], this.low[currentVertex.data]);
                if(this.low[currentVertex.data] == this.pre[currentVertex.data]) {
                    this.bridge++;
                    console.log(currentVertex.data+" - "+v+" is a bridge");
                }
            } else if (u != currentVertex.data) {
                this.low[v] = Math.min(this.low[v], this.pre[currentVertex.data]);
            }
            currentVertex = currentVertex.next;
        }
    }

    components() {
        return this.bridge + 1;
    }

}