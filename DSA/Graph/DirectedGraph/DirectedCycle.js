const Stack = require('../../Stack/Stack');
module.exports = class DirectedCycle {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.visited = Array(this.V).fill(false);
        this.inStack = Array(this.V).fill(false);
        this.edgeTo = Array(this.V).fill(-1);
        this.cycle = new Stack();
        for(let v = 0; v < this.V; v++){
            if(!this.visited[v] && this.cycle.isEmpty()) this.dfs(Graph, v);
        }
    }

    isVisited(V) {
        return this.visited[V];
    }

    setVisited(V) {
        this.visited[V] = true;
        return;
    }

    isInStack(V) {
        return this.inStack[V];
    }

    setInStack(V) {
        this.inStack[V] = true;
        return;
    }

    dfs(Graph, v) {
        this.setVisited(v);
        this.setInStack(v);
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!this.cycle.isEmpty()) return;
            if(!this.isVisited(currentVertex.data)) {
                this.edgeTo[currentVertex.data] = v; 
                this.dfs(Graph, currentVertex.data);
            } else if(this.inStack[currentVertex.data]){
                for(let x = v; x != currentVertex.data; x = this.edgeTo[x]) this.cycle.push(x);
                this.cycle.push(currentVertex.data);
                this.cycle.push(v);
            }
            currentVertex = currentVertex.next;
        }
        this.inStack[v] = false;
    }
}