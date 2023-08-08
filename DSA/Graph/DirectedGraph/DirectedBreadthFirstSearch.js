const Queue = require('./../../Queue/Queue');
module.exports = class DirectedBreadthFirstSearch {
    constructor(Graph) {
        this.visited = Array(Graph.numOfVertices()).fill(false);
        this.queue = new Queue();
        this.bfs(Graph, 0);
    }

    bfs(Graph, v) {
        this.queue.enqueue(v);
        console.log("Visiting: ", v);
        this.visited[v] = true;
        while (!this.queue.isEmpty()) {
            let vertex = this.queue.dequeue();
            let currentVertex = Graph.list[vertex].head;
            while (currentVertex != null) {
                if (!this.isVisited(currentVertex.data)) {
                    console.log("Visiting: ", currentVertex.data);
                    this.visited[currentVertex.data] = true;
                    this.queue.enqueue(currentVertex.data);
                }
                currentVertex = currentVertex.next;
            }
        }
    }

    isVisited(V) {
        return this.visited[V];
    }

}