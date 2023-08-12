module.exports = class MinPQ {
    constructor(N = 0) {
        this.N = N;
        this.pq = [];
    }

    isEmpty() {
        return (this.N == 0);
    }

    size() {
        return this.N;
    }

    insert(edge) {
        this.pq[++this.N] = edge;
        this.swim(this.N);
    }

    deleteMin() {
        const min = this.pq[1];
        this.exch(1, this.N--);
        this.pq[this.N+1] = null;
        this.sink(1);
        return min;
    }

    exch(i, j) {
        const temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }

    more(i, j) {
        if(this.pq[i].weight > this.pq[j].weight) return true;
        else return false;
    }

    sink(k) {
        while(2*k <= this.N) {
            let j = 2*k;
            if(j < this.N && this.more(j, j+1)) j++;
            if(!this.more(k, j)) break;
            this.exch(k, j);
            k = j;
        }
    }

    swim(k) {
        while(k > 1 && this.more(Math.floor(k/2), k)) {
            this.exch(Math.floor(k/2), k);
            k = Math.floor(k/2);
        }
    }
}