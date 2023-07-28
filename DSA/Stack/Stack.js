module.exports = class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    size() {
        return this.items.length;
    }

    getTop() {
        return this.top;
    }

    isEmpty() {
        return (this.items.length == 0);
    }

    push(element) {
        this.top = element;
        this.items.push(element);
    }

    pop() {
        if(this.isEmpty()) return null;
        if(this.size() == 1) this.top = null;
        else this.top = this.items[this.size() - 2];
        return this.items.pop();
    }
}