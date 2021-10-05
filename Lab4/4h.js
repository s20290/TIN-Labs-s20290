// h)	Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondLowGrt(arr){
    var tmpArr = arr.sort(
        function(a,b){
            return a-b
        }
    )
    console.log(tmpArr)
    console.log(`\n ${tmpArr[1]}  ${tmpArr[tmpArr.length-2]}`)
    
}

secondLowGrt([4,5,1,0,20,3,99,40,2,11])