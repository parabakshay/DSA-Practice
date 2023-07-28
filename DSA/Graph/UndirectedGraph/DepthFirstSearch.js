const Stack = require('../../Stack/Stack');
module.exports = class DepthFirstSearch{
    constructor(Graph, source){
        this.source = source;
        this.Graph = Graph;
        this.marked = Array(Graph.numOfVertices()).fill(false);
        this.edgeTo = [];
        this.count = 0;
        if (Graph.validateVertex(source))
            this.dfs(Graph, source);
    }

    dfs(Graph, source) {
        this.count++;
        this.marked[source] = true;
        let currentVertex = Graph.list[source].head;
        while(currentVertex != null){
            if(!this.isMarked(currentVertex.data)) {
                this.edgeTo[currentVertex.data] = source; 
                this.dfs(Graph, currentVertex.data);
            }
            currentVertex = currentVertex.next;   
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
