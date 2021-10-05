// f)	Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
function primtOrNot(n){
    if (n <= 1){
        return false
    }
    for (let i = 2; i < n; i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

console.log(`\n${primtOrNot(7)}`)