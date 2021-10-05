// d)	Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'

function sortAlphabetic(str){
    var arr = str.split('')
    var alpha = arr.sort().join('').replace(/\s+/g, '')
    return alpha
}

console.log(`\n${sortAlphabetic("webmaster")}`)