const Queue = require('../../Queue/Queue');
const MinPQ = require('./MinPQ');
module.exports = class PrimMST {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.E = Graph.numOfVertices();
        this.mst = new Queue();
        this.minPQ = new MinPQ();
        this.visited = Array(this.V).fill(false);
        this.visit(Graph, 0);
        while(!this.minPQ.isEmpty()) {
            let minEdge = this.minPQ.deleteMin();
            let v = minEdge.either();
            let w = minEdge.other(v);
            if(this.visited[v] && this.visited[w]) continue;
            this.mst.enqueue(minEdge);
            if(!this.visited[v]) this.visit(Graph, v);
            if(!this.visited[w]) this.visit(Graph, w);
        }
    }
    
    visit(Graph, v) {
        this.visited[v] = true;
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!this.visited[currentVertex.other(v)]) this.minPQ.insert(currentVertex);
            currentVertex = currentVertex.next;
        }
    }
}