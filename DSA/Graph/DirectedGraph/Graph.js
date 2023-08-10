const SinglyLinkedList = require('./../../LinkedList/SinglyLinkedList/LinkedList');

module.exports = class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.list = [];
        for(let i = 0; i < vertices; i++) {
            this.list.push(new SinglyLinkedList());
        }
    }

    numOfVertices(){
        return this.vertices;
    }

    numOfEdges(){
        return this.edges;
    }

    validateVertex(v) {
        return (v >=0 && v < this.vertices)
    }

    addEdge(source, destination) {
        if(this.validateVertex(source) && this.validateVertex(destination)) {
            this.edges += 1;
            this.list[source].insertAtHead(destination);
        }
    }

    reverse() {
        let revDiGraph = new Graph(this.vertices);
        for(let v = 0; v < this.vertices; v++) {
            let currentVertex = this.list[v].head;
            while(currentVertex != null) {
                revDiGraph.addEdge(currentVertex.data, v);
                currentVertex = currentVertex.next;
            }
        }
        return revDiGraph;
    }

    printGraph() {
        console.log(">>Adjacency List of Directed Graph<<");
        var i;
        for (i = 0; i < this.list.length; i++) {
            process.stdout.write("|" + String(i) + "| => ");
            let temp = this.list[i].getHead();
            while (temp != null) {
                process.stdout.write("[" + String(temp.data) + "] -> ");
                temp = temp.next;
            }
            console.log("null ");
        }
    }
}