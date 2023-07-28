const LinkedList = require('./LinkedList');
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