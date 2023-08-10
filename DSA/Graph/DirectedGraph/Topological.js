const DirectedDepthFirstOrder = require('./DirectedDepthFirstOrder');
const DirectedCycle = require('./DirectedCycle');
const Stack = require('../../Stack/Stack');
module.exports = class Topological {
    constructor(Graph) {
        this.order;
        this.rank = [];
        let i = 0;
        const finder = new DirectedCycle(Graph);
        if (finder.cycle.isEmpty()) {
            const dfOrder = new DirectedDepthFirstOrder(Graph);
            this.order = dfOrder.reversePostOrder();
            this.copyStack = new Stack();
            for(let i = 0; i < this.order.items.length; i++) this.copyStack.push(this.order.items[i]);
            this.copyStack;
        }
    }
}