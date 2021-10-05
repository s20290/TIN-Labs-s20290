

function temperatureConversion(temp, measurement){
    var res = "";
    if(measurement.toLowerCase() === 'f'){
        let num = 5/9*(temp-32)
        res =`From ${temp}${measurement} to ${num.toFixed(4)} Celcius`
    }else if(measurement.toLowerCase() === 'c'){
        let num = temp*2 + 30
        res = `From ${temp}${measurement} to ${num.toFixed(4)} Fahrenheit`
    }else{
        return "Unknown measurement"
    }
    return res
}

function processText(inputText) {
    console.log(inputText)
    var json = inputText.trim().split(/(\d+)/)
    console.log(json)
    return json;
}

function convertTemperatures(){
    var tempForm = document.getElementById("tempForm")
    var tempText = document.getElementById("tempText")
    let displayTemp = processText(tempForm.elements['temperature'].value)
    tempText.innerText = temperatureConversion(displayTemp[1],displayTemp[2])
}