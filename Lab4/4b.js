// b)	Function calculating nth number in Fibonacci sequence.
console.log("\nFibonacci number\n")
function fibonacciNumber(n){
    if (n <= 1)
        return n;
    return fibonacciNumber(n-1) + fibonacciNumber(n-2);
}

console.log(fibonacciNumber(10))