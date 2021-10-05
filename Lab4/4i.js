// i)	Write a JavaScript function to convert an amount of money to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function amountTocoins(amount, arr){
    if(amount <= 0){
        return 0
    }
    var tmpArr = arr.sort(
        function(a,b){
            return b-a
        }
    )
    var out = []
    var index = 0
    var amountTmp = 0
    while(true){
        if((amountTmp + tmpArr[index]) > amount){
            index++
            continue
        }else{
            amountTmp += tmpArr[index]
            out.push(tmpArr[index])
        }
        if(amountTmp == amount){
            return out
        }
    }
}

console.log(`\n${amountTocoins(46, [25, 10, 5, 2, 1])}`)