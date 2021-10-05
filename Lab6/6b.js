function sleep(ms){
    return new Promise(res=>setTimeout(res,ms))
}

async function onPageStartup(){
    await sleep(5000)
    var paragraph = document.getElementById("onload")
    paragraph.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat a voluptatibus hic quos, veniam amet? Placeat perspiciatis explicabo rerum obcaecati, ut sapiente alias ipsa sunt vel perferendis illo unde repudiandae?"
}

window.onload = function(){
    onPageStartup()
}