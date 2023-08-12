module.exports = class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return (this.head == null);
    }

    getHead() {
        return this.head;
    }

    insertAtHead(edge) {
        edge.next = this.head;
        this.head = edge;
        return this;
    }

    insertAtTail(edge) {
        if(this.isEmpty()) {
            this.head = edge;
        } else {
            let currentEdge = this.head;
            while(currentEdge.next != null) {
                currentEdge = currentEdge.next;
            }
            currentEdge.next = edge;
        }
        this.length += 1;
    }

    deleteAtHead() {
        if(this.isEmpty()) return;
        else this.head = this.head.next;
        this.length -= 1;
    }

    deleteAtTail() {
        if(this.isEmpty()) return;
        else if(this.size() == 1) this.head.next;
        else {
            let prev = this.head;
            let curr = prev.next;
            while(curr.next != null) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }
        this.length -= 1;
    }
}