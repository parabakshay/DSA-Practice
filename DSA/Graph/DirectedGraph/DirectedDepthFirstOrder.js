const Queue = require('./../../Queue/Queue');
const Stack = require('../../Stack/Stack');
module.exports = class DirectedDepthFirstOrder {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.preCounter = 0;
        this.postCounter = 0;
        this.preOrder = new Queue();
        this.postOrder = new Queue();
        this.visited = Array(this.V).fill(false);
        this.pre = [];
        this.post = [];
        for(let v = 0; v < this.V; v++) {
            if(!this.isVisited(v)) this.dfs(Graph, v);
        }
    }

    isVisited(V) {
        return this.visited[V];
    }

    dfs(Graph, v) {
        this.visited[v] = true;
        this.pre[v] = this.preCounter++;
        this.preOrder.enqueue(v);
        let currentVertex = Graph.list[v].head;
        while(currentVertex != null) {
            if(!this.isVisited(currentVertex.data)) {
                this.dfs(Graph, currentVertex.data);
            }
            currentVertex = currentVertex.next;
        }
        this.postOrder.enqueue(v);
        this.post[v] = this.postCounter++;
    }

    reversePostOrder() {
        const reversePost = new Stack();
        const copyQueue = new Queue();
        let head = this.postOrder.items.head;
        while(head != null) {
            copyQueue.enqueue(head.data);
            head = head.next;
        }
        while(!copyQueue.isEmpty()) {
            reversePost.push(copyQueue.dequeue());
        }
        return reversePost;
    }
}