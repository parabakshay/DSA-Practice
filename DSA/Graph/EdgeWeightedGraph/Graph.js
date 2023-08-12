const SinglyLinkedList = require('./SinglyLinkedList');
const Edge = require('./Edge');
module.exports = class Graph {
    constructor(V) {
        this.vertices = V;
        this.edges = 0;
        this.list = [];
        for(let v = 0; v < this.vertices; v++) {
            this.list[v] = new SinglyLinkedList();
        }
    }

    numOfVertices() {
        return this.vertices;
    }

    numOfEdges() {
        return this.edges;
    }

    addEdge(E) {
        let v = E.either();
        let w = E.other(v);
        this.list[v].insertAtHead(E);
        this.list[w].insertAtHead(new Edge(v, w, E.weight));
        this.edges += 1;
    }

    adjacent(V) {
        return this.list[V];
    }

    allEdges() {
        const AllEdges = new SinglyLinkedList();
        for(let v = 0; v < this.vertices; v++) {
            let currentEdge = this.list[v].head;
            while(currentEdge != null) {
                if(currentEdge.other(v) > v) AllEdges.insertAtHead(new Edge(currentEdge.v, currentEdge.w, currentEdge.weight));
                currentEdge = currentEdge.next;
            }
        }
        return AllEdges;
    }

    printGraph() {
        console.log(">>Adjacency List of Directed Graph<<");
        var i;
        for (i = 0; i < this.list.length; i++) {
            process.stdout.write("|" + String(i) + "| => ");
            let temp = this.list[i].getHead();
            while (temp != null) {
                process.stdout.write("[v: " + String(temp.v) + ", w: "+ String(temp.w) +", weight: "+ String(temp.weight)+"] -> ");
                temp = temp.next;
            }
            console.log("null ");
        }
    }
}