const UF = require('../../UnionFind/UnionFind');
const MinPQ = require('./MinPQ');
const Queue = require('../../Queue/Queue');
module.exports = class KruskalMST {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.E = Graph.numOfEdges();
        let edge = Graph.allEdges().head;
        this.uf = new UF(this.V);
        this.minPQ = new MinPQ();
        for(let e = 0; e < this.E; e++) {
            this.minPQ.insert(edge);
            edge = edge.next;
        }
        this.mst = new Queue();
        while(!this.minPQ.isEmpty() && this.mst.size() < this.V - 1) {
            let e = this.minPQ.deleteMin();
            let v = e.either();
            let w = e.other(v);
            if(this.uf.connected(v, w)) continue;
            this.uf.union(v, w);
            this.mst.enqueue(e);
        }
    }
}