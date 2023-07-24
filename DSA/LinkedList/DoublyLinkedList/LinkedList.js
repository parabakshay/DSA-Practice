const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return this;
    }

    deleteTail() {
        if (this.isEmpty()) return this;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return this;
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
            return true
        } else {
            let currentNode = this.head;
            while(currentNode != null) {
                if ((currentNode.next != null) && (currentNode.next.data == data)) {
                    currentNode.next.prev = null;
                    if (currentNode.next.next != null) currentNode.next.next.prev = currentNode;
                    currentNode.next = currentNode.next.next;
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

const main = function () {
    //TestCase 1: Insert at head when list is empty
    const list1 = new LinkedList();
    list1.insertAtHead(1);
    list1.printList();

    //TestCase 2: Insert at head when list is not empty
    list1.insertAtHead(2);
    list1.printList();

    //TestCase 3: Insert at tail when list is empty
    const list2 = new LinkedList();
    list2.insertAtTail(99);
    list2.printList();

    //TestCase 4: Insert at tail when list is not empty
    list2.insertAtTail(88);
    list2.printList();

    //TestCase 5: Search for value which does not exist
    list2.insertAtTail(77);
    list2.insertAtTail(66);
    list2.insertAtTail(55);
    console.log(list2.search(44));

    //TestCase 6: Search for value which does exist
    console.log(list2.search(66));

    //TestCase 7: Delete at head
    list2.deleteHead();
    list2.printList();

    //TestCase 8: Delete at tail
    list2.deleteTail();
    list2.printList();

    //TestCase 9: Delete by value
    list2.deleteValue(88);
    list2.printList();
    list2.deleteValue(77);
    list2.printList();
    list2.deleteValue(66);
    list2.printList();
}

main();