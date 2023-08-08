const Stack = require('../../Stack/Stack');
const Queue = require('../../Queue/Queue');
module.exports = class DirectedBreadthFirstPath {
    constructor(Graph, source) {
        this.source = source;
        this.V = Graph.numOfVertices(Graph.numOfVertices());
        this.edgeTo = Array(this.V).fill(-1);
        this.visited = Array(this.V).fill(false);
        this.queue = new Queue();
        this.bfs(Graph, source);
    }

    bfs(Graph, source) {
        this.queue.enqueue(source);
        this.setVisited(source);
        while(!this.queue.isEmpty()){
            let currentVertex = this.queue.dequeue();
            let currentNode = Graph.list[currentVertex].head;
            while(currentNode != null) {
                if(!this.isVisited(currentNode.data)){
                    this.edgeTo[currentNode.data] = currentVertex;
                    this.setVisited(currentNode.data);
                    this.queue.enqueue(currentNode.data);
                }
                currentNode = currentNode.next;
            }
        }
    }

    setVisited(V) {
        this.visited[V] = true;
        return;
    }

    isVisited(V) {
        return this.visited[V];
    }

    pathTo(destination) {
        const path = new Stack();
        if (!this.isVisited(destination)) {
            path.push("No Path");
        } else {
            for (let x = destination; x != this.source; x = this.edgeTo[x]) {
                path.push(x);
            }
            path.push(this.source);
        }
        return path;
    }
}