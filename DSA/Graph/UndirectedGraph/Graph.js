const SinglyLinkedList = require('../../LinkedList/SinglyLinkedList/LinkedList');

module.exports = class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.list = [];
        for (let v = 0; v < vertices; v++) {
            this.list.push(new SinglyLinkedList());
        }
    }

    numOfVertices() {
        return this.vertices;
    }

    numOfEdges() {
        return this.edges;
    }

    validateVertex(v) {
        return (v >=0 && v < this.vertices)
    }

    addEdge(source, destination) {
        if (this.validateVertex(source) && this.validateVertex(destination)) {
            this.E += 1;
            this.list[source].insertAtHead(destination);
            this.list[destination].insertAtHead(source);
        }
    }

    printGraph() {
        console.log(">>Adjacency List of Undirected Graph<<");
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