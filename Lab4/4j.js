// j)	Write a JavaScript program for binary search.

function binarySearch(arr,key){
    let l = 0, r = arr.length - 1
    while(l <= r){
        let m = Math.floor((l+r)/2)
        if(arr[m] === key){
            return "Found element"
        }else if(arr[m] > key){
            r = m-1
        }else{
            l = m+1
        }
    }
    return "No such element"
}

console.log(`\n${binarySearch([1, 3, 5, 7, 8, 9],3)}`)