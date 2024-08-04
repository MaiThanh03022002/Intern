function Fibonacci() {
    const memo = new Map();

    function fib(n) {
        if (n <= 1) {
            return 1;
        }
        if (memo.has(n)) {
            return memo.get(n);
        }
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);

        return result;
    }

    return fib;
}

const fibonacci = Fibonacci();

console.log(fibonacci(10)); 
console.log(fibonacci(20)); 
