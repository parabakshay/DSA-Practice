const Stack = require('../../Stack/Stack');
module.exports = class Cycle {

    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.cycle = new Stack();
        this.edgeTo = [];
        this.marked = Array(this.V).fill(false);
        if (this.hasParallelEdges(Graph)) return;
        if (this.hasSelfLoops(Graph)) return;
        for(let v = 0; v < this.V; v++) {
            if(!this.marked[v])
                this.dfs(Graph, -1 ,v);
        }
    }

    dfs(Graph, u, v) {
        this.marked[v] = true;
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!(this.cycle.isEmpty())) return;
            if(!this.marked[currentVertex.data]) {
                this.edgeTo[currentVertex.data] = v;
                this.dfs(Graph, v, currentVertex.data);
            } else if (u != currentVertex.data){
                for(let x = v; x != currentVertex.data; x = this.edgeTo[x]) {
                    this.cycle.push(x);
                }
                this.cycle.push(currentVertex.data);
                this.cycle.push(v);
            }
            currentVertex = currentVertex.next;
        }
    }

    hasParallelEdges(Graph) {
        let marked = Array(this.V).fill(false);
        for (let v = 0; v < this.V; v++) {
            let currentVertex = Graph.list[v].head;
            while (currentVertex != null) {
                if (marked[currentVertex.data]) {
                    this.cycle.push(v);
                    this.cycle.push(currentVertex.data);
                    this.cycle.push(v);
                    return true;
                } 
                marked[currentVertex.data] = true;
                currentVertex = currentVertex.next;
            }
            marked = Array(this.V).fill(false);
        }
        return false;
    }

    hasSelfLoops(Graph) {
        for (let v = 0; v < this.V; v++) {
            let currentVertex = Graph.list[v].head;
            while(currentVertex != null) {
                if(currentVertex.data == v) {
                    this.cycle.push(v);
                    this.cycle.push(v);
                    return true;
                }
                currentVertex = currentVertex.next;
            }
        }
        return false;
    }

    hasCycle() {
        return !(this.cycle.isEmpty());
    }
}