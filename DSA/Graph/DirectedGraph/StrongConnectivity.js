const DirectedDepthFirstOrder = require('./DirectedDepthFirstOrder');
module.exports = class StrongConnectivity {
    constructor(Graph) {
        this.V = Graph.numOfVertices();
        this.marked = Array(this.V).fill(false);
        this.id = []
        this.count = 0;
        let dfOrder = new DirectedDepthFirstOrder(Graph.reverse());
        this.order = dfOrder.reversePostOrder();
        while (!this.order.isEmpty()) {
            let i = this.order.pop();
            if (!this.marked[i]) {
                this.dfs(Graph, i);
                this.count++;
            }
        }
    }

    dfs(Graph, v) {
        this.marked[v] = true;
        this.id[v] = this.count;
        let currentVertex = Graph.list[v].head;
        while (currentVertex != null) {
            if (!this.marked[currentVertex.data]) this.dfs(Graph, currentVertex.data);
            currentVertex = currentVertex.next;
        }
    }

    isStronglyConnected(x, y) {
        return (this.id[x] == this.id[y]);
    }

    numOfComponent() {
        return this.count;
    }
}