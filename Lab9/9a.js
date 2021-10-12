
window.onload = function(){
    let btn = document.getElementById("mybtn")
    console.log(btn)
    if(btn){
        btn.addEventListener('click',getJsonData)
    }
}

function getJsonData(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "9a.json",true)

    xhr.onload = function(){
        if(this.status == 200){
            let req = JSON.parse(this.responseText)
            let output =`<ul>
                <li>Num1: ${req.num1}</li>
                <li>Num2: ${req.num2}</li>
                <li>Arithmetic: ${req.arithmetic}</li>
                <li>Answer: ${calculate(req)}</li>
            </ul>`;

            document.getElementById('ans').innerHTML = output
        }
    }
    xhr.send()
}
function calculate(req){
    let num1 = parseInt(req.num1)
    let num2 = parseInt(req.num2)
    switch(req.arithmetic){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "Unknown arithmetic"
    }
}