const Queue = require('./Queue');

const main = function () {
    var myQueue = new Queue();
    console.log("You have successfully created a Queue of size: " + myQueue.size());
    console.log("Enqueue Elements 2,4,6,8,10");
    myQueue.enqueue(2);
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    myQueue.enqueue(8);
    myQueue.enqueue(10);


    console.log("Dequeue(): " + myQueue.dequeue());
    console.log("Dequeue(): " + myQueue.dequeue());

    console.log("getFront(): " + myQueue.getFront());
    console.log("getTail(): " + myQueue.getTail());

    console.log("Enqueue Elements 12,14");
    myQueue.enqueue(12);
    myQueue.enqueue(14);

    while (myQueue.isEmpty() == false) {
        console.log("Dequeue(): " + myQueue.dequeue());
    }

    console.log("Is queue empty()?: " + myQueue.isEmpty())
    console.log("getTop(): " + myQueue.getFront());
}

main();