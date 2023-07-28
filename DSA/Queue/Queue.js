const DoublyLinkedList = require('../LinkedList/DoublyLinkedList/LinkedList');

module.exports = class Queue {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return (this.items.length == 0);
    }

    getFront() {
        return this.items.getHead() == null ? null : this.items.getHead().data;
    }

    getTail() {
        return this.items.getTail() == null ? null : this.items.getTail().data;;
    }

    enqueue(element) {
        return this.items.insertAtTail(element);
    }

    dequeue() {
        return this.items.deleteHead()
    }
}