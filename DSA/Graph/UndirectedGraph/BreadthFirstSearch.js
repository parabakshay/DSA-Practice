const Queue = require('../../Queue/Queue');
const Stack = require('../../Stack/Stack');
module.exports = class BreadthFirstSearch {
    constructor(Graph, source) {
        this.Graph = Graph;
        this.source = source;
        this.marked = Array(Graph.numOfVertices()).fill(false);
        this.edgeTo = [];
        this.count = 0;
        if (Graph.validateVertex(source)) this.bfs(Graph, source);
    }

    bfs(Graph, source) {
        const q = new Queue();
        q.enqueue(source)
        while (!q.isEmpty()) {
            const currentVertex = q.dequeue();
            this.count++;
            this.marked[currentVertex] = true;
            let vertexNode = Graph.list[currentVertex].head;
            while (vertexNode != null) {
                if (!this.isMarked(vertexNode.data)) {
                    this.edgeTo[vertexNode.data] = currentVertex;
                    q.enqueue(vertexNode.data);
                }
                vertexNode = vertexNode.next;
            }
        }
    }

    isMarked(vertex) {
        return this.marked[vertex];
    }

    pathTo(destination) {
        if(this.Graph.validateVertex(destination)) {
            if(!this.isMarked(destination)) return null;
            const path = new Stack();
            for(let x = destination; x != this.source; x = this.edgeTo[x]) {
                path.push(x)
            }
            path.push(this.source);
            return path;
        }
    }

}