

function fatorial(n) {
    const array = [];

    for (let i = 1; i <= n; i++) {
        array.push(i);
    }

    return array.reduce((a, b) => a *b);
}

console.log(fatorial(3));
console.log(fatorial(3));
console.log(fatorial(3));
console.log(fatorial(3));