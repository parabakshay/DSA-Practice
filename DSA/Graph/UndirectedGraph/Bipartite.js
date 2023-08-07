const Stack = require('./../../Stack/Stack');
module.exports = class Bipartite {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.edgeTo = [];
        this.bipartite = true;
        this.marked = Array(this.V);
        this.color = Array(this.V);
        this.cycle = new Stack();
        for(let i = 0; i < this.V; i++) {
            if(!this.marked[i]) this.dfs(Graph, i);
        }
    }

    dfs(Graph, v) {
        this.marked[v] = true;
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!this.cycle.isEmpty()) return;
            if(!this.marked[currentVertex.data]) {
                this.edgeTo[currentVertex.data] = v;
                this.color[currentVertex.data] = !this.color[v];
                this.dfs(Graph, currentVertex.data, v);
            } else if(this.color[currentVertex.data] == this.color[v]){
                this.bipartite = false;
                for(let x = v; x != currentVertex.data; x = this.edgeTo[x]){
                    this.cycle.push(x);
                }
                this.cycle.push(currentVertex.data);
            }
            currentVertex = currentVertex.next;
        }
    }

    isBipartite() {
        return this.bipartite;
    }
}