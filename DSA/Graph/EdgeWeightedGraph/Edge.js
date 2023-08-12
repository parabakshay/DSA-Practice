module.exports = class Edge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
        this.next = null;
    }

    getWeight() {
        return this.weight;
    }

    either() {
        return this.v;
    }

    other(vertex) {
        if(this.v == vertex) return this.w;
        else if(this.w == vertex) return this.v;
        else throw new Error("Inconsistent Edge");
    }

    compare(that) {
        if(this.getWeight() > that.getWeight()) return 1;
        else if(this.getWeight() < that.getWeight()) return -1;
        else return 0;
    }
}
