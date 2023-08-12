const UF = require('./UnionFind');

const main = function() {
    const N = 10;
    const uf = new UF(N);
    uf.union(4, 3);
    uf.union(3, 8);
    uf.union(6, 5);
    uf.union(9, 4);
    uf.union(2, 1);
    uf.union(8, 9);
    uf.union(5, 0);
    uf.union(7, 2);
    uf.union(6, 1);
    uf.union(1, 0);
    uf.union(6, 7);

    console.log("Is 4 and 7 connected? Ans: ", uf.connected(4, 7));
    console.log("Is 1 and 5 connected? Ans: ", uf.connected(1, 5));
}

main();