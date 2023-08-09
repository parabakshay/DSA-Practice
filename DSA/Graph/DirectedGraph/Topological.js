const DirectedDepthFirstOrder = require('./DirectedDepthFirstOrder');
const DirectedCycle = require('./DirectedCycle');
module.exports = class Topological {
    constructor(Graph) {
        this.order;
        this.rank = [];
        let i = 0;
        const finder = new DirectedCycle(Graph);
        if (finder.cycle.isEmpty()) {
            const dfOrder = new DirectedDepthFirstOrder(Graph);
            this.order = dfOrder.reversePostOrder();
            while(!this.order.isEmpty()) {
                console.log(this.order.getTop());
                this.order.pop();
            }
        }
    }
}