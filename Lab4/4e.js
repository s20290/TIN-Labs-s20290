// e)	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longestWord(str){
    var arr = str.split(" ")
    let longest = arr[0]
    for(let i = 1;i<arr.length;i++){
        if(longest.length < arr[i].length){
            longest = arr[i]
        }
    }
    return longest
}

console.log(`\n${longestWord("aoisjdajdajsdlaaoisjdabig chungus bro meatblasjdosi")}`)
