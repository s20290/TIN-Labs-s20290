// a)	Function calculating the factorial of a number. Do this using recursion and iteration. Create recursive function using function expression, iterative function using function declaration

console.log("Factorial iterative/recursive\n")
function factorialIterative(num){
    let res = 1
    for (let i = 1; i<=num; i++){
        res *= i
    }
    return res
}

console.log(factorialIterative(10))

function factorialRecursive(num){
    if(num == 0){
        return 1
    }
    return num * factorialRecursive(num-1)
}

console.log(factorialRecursive(10))