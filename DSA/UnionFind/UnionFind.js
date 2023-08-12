module.exports = class WeightedQuickUnionUF {
    constructor(N) {
        this.id = [];
        this.count = N;
        this.size = Array(N).fill(1);
        for(let i = 0; i < N; i++) {
            this.id[i] = i;
        }
    }

    getCount() {
        return this.count;
    }

    connected(p, q) {
        return (this.find(p) == this.find(q));
    }

    find(p) {
        while(p != this.id[p]) p = this.id[p];
        return p;
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if(pRoot == qRoot) return;
        if(this.size[pRoot] < this.size[qRoot]) {
            this.id[pRoot] = qRoot;
            this.size[qRoot] += this.size[pRoot];
        } else {
            this.id[qRoot] = pRoot;
            this.size[pRoot] += this.size[qRoot];
        }
        this.count--;
        return;
    }

}