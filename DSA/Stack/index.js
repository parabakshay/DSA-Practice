const Stack = require('./Stack');

const main = function () {
    const myStack = new Stack();

    for (let i = 0; i < 5; i++) {
        myStack.push(i);
    }

    console.log("Is stack empty? " + myStack.isEmpty());
    console.log("top: " + myStack.getTop());

    for (let i = 0; i < 5; i++) {
        console.log("Element popped: " + myStack.pop());
        console.log("top: " + myStack.getTop());
    }

    console.log("Is stack empty?: " + myStack.isEmpty());
    console.log("top: " + myStack.getTop());
}

main();