
const postUrl = "http://localhost:3000/jsonPost"

function sendRequest(){
    
    var xhr = new XMLHttpRequest()
    xhr.open("POST",postUrl,true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = ()=>{
        var done= 4, ok =200
        if(xhr.readyState == done && xhr.status == ok){
            document.getElementById('ans').innerHTML = `Answer: ${xhr.response}`
        }
    }
    let myJson = calculate()
    console.log(myJson)
    xhr.send(myJson)
}

function calculate(){
    console.log(document.getElementById("num1"))
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let arith = document.getElementById("arith").value
    let ans;
    switch(arith){
        case '+':
            ans= num1 + num2
            break
        case '-':
            ans= num1 - num2
            break
        case '*':
            ans= num1 * num2
            break
        case '/':
            ans= num1 / num2
            break
        default:
            ans = "Unknown arithmetic"
            break
    }
    let jsonString = `{"num1":"${num1}", "num2": "${num2}", "arithmetic":"${arith}", "answer":"${ans}"}`
    
    return jsonString
}

//fix json, json parser
//cool tip, learn express structure, middleware and so on
//callback functions
//remember which part is happening on server and client
//