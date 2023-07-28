const Node = require('./Node');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return (this.head == null);
    }

    getHead() {
        return this.head;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) this.head = newNode;
        else {
            let currentNode = this.head;
            while (currentNode.next != null) currentNode = currentNode.next;
            currentNode.next = newNode;
        }
        return this;
    }

    search(data) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data == data) return true;
            currentNode = currentNode.next
        }
        return false;
    }

    deleteHead() {
        if (this.isEmpty()) return this;
        this.head = this.head.next;
        return this;
    }

    deleteTail() {
        if (this.isEmpty()) return this;
        if (this.head.next == null) {
            this.head = null;
            return this;
        }
        let currentNode = this.head.next;
        let prevNode = this.head;;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        return this;
    }

    deleteValue(data) {
        if (this.isEmpty()) return false;
        if (this.head.data == data) {
            this.deleteHead();
            return true;
        }
        let currentNode = this.head;
        while (currentNode != null) {
            if ((currentNode.next != null) && (currentNode.next.data == data)) {
                currentNode.next = currentNode.next.next;
                return true
            }
            currentNode = currentNode.next
        }
        return false;
    }

    printList() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return false;
        } else {
            let temp = this.head;
            while (temp != null) {
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.next;
            }
            console.log("null");
            return true;
        }
    }

}