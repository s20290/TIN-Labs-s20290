// c)	Write a JavaScript function that checks whether a passed string is palindrome or not

function isPalindrome(str){
    let ispalindrome = true
    let lowerCase = str.toLowerCase()
    for (let i = 0; i<lowerCase.length;i++){
        if(lowerCase.charAt(i) != lowerCase.charAt(lowerCase.length-i-1)){
            ispalindrome = false
            break
        }
    }
    if(!ispalindrome){
        return "\nNot palindrome"
    }
    return "\nIs panlindrome"
}

console.log(isPalindrome("supus"))