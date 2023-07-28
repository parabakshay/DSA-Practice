module.exports = class ConnectedComponents{
    constructor(Graph){
        this.Graph = Graph;
        this.id = [];
        this.count = 0;
        this.marked = Array(Graph.numOfVertices()).fill(false);
        this.ConnectedComponents(Graph);
    }

    ConnectedComponents(Graph){
        for(let v = 0; v < Graph.numOfVertices(); v++) {
            if(!this.isMarked(v)) {
                this.dfs(Graph, v, this.count);
                this.count++;
            }
        }
    }

    dfs(Graph, source, count) {
        this.id[source] = count;
        this.marked[source] = true;
        let currentVertex = Graph.list[source].head;
        while(currentVertex != null) {
            if(!this.isMarked(currentVertex.data)){
                this.dfs(Graph, currentVertex.data, count);
            }
            currentVertex = currentVertex.next;
        }
    }

    isMarked(vertex){
        if(this.Graph.validateVertex(vertex)) return this.marked[vertex];
    }

    isConnected(vertex1, vertex2){
        if(this.Graph.validateVertex(vertex1) && this.Graph.validateVertex(vertex2)) return (this.id[vertex1] == this.id[vertex2])
        else return false;
    }

    count(){
        return this.count;
    }
}