

window.onload = function(){
    let form = document.getElementById("myForm")
    console.log(form)
    if(form){
        form.addEventListener("submit",event =>{
            event.preventDefault()
            sendData()
        })
    }
}

function sendData(){
    var xhr = new XMLHttpRequest()
    var form = document.getElementById("myForm")
    console.log(form)
    xhr.open("POST", "http://127.0.0.1:5500/Lab9/9b.html")
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')

    xhr.onload = ()=>{
        if(this.status == 200 && this.readyState == 4){
            console.log("its a me "+this.responseText)
            const res = document.getElementById("result")
            res.innerHTML = this.responseText
        }
    }
    xhr.send()
}