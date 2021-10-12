

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
    // xhr.onreadystatechange = ()=>{
    //     if(this.readyState == 4 && this.status == 200){
    //         document.getElementById("result").innerHTML = this.responseText
    //     }
    // }
    console.log(form)
    xhr.open("POST", "process.php",true)
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')

    xhr.onload = ()=>{
        console.log(this.responseText)
    }
    xhr.send("")
}