const Node = require('./Node');

class LinkedList {
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

const main = function () {
    //TestCase 1: Insert at head when list is empty
    const list = new LinkedList();
    list.insertAtHead(1);
    list.printList();

    //TestCase 2: Insert at head when list is not empty
    list.insertAtHead(2);
    list.printList();

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

    //TestCase 6: Search for value which does not exist
    console.log(list2.search(66));

    //TestCase 7: Delete at head
    list2.deleteHead();
    list2.printList();

    //TestCase 8: Delete at tail
    list2.deleteTail();
    list2.printList();

    //TestCase 9: Delete by value
    list2.deleteValue(77);
    list2.printList();
}

main();