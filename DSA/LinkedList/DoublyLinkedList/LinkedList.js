const Node = require('./Node');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return (this.head == null);
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    incrementLength() {
        return this.length += 1;
    }

    decrementLength() {
        return this.length -= 1;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.incrementLength();
        return this;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            newNode.prev = null;
            newNode.next = null;
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.incrementLength();
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
        if (this.isEmpty()) return null;
        const headElement = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.decrementLength();
        return headElement;
    }

    deleteTail() {
        if (this.isEmpty()) return null;
        const tailElement = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.decrementLength();
        return tailElement;
    }

    deleteValue(data) {
        if (this.isEmpty()) return false;
        if (this.head.data == data) {
            if (this.head.next == null) {
                this.head = null;
                this.tail = null;
                
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.decrementLength();
            return true
        } else {
            let currentNode = this.head;
            while(currentNode != null) {
                if ((currentNode.next != null) && (currentNode.next.data == data)) {
                    currentNode.next.prev = null;
                    if (currentNode.next.next != null) currentNode.next.next.prev = currentNode;
                    currentNode.next = currentNode.next.next;
                    this.decrementLength();
                    return true
                }
                currentNode = currentNode.next
            }
            return false;
        }
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