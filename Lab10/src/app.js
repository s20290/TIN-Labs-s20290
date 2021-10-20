import calculateTemp from './temp.js'
import calculateDist from './temp.js'



export default function processCalculation(){
    const submitBtn = document.getElementById('mybtn')
    const inputVal = document.getElementById('val')
    const unitVal = document.getElementById('units')
    const resultHtml = document.getElementById('result')
    console.log(submitBtn)
    submitBtn.addEventListener('click',()=>{
        const val = inputVal.value
        const unit = unitVal.value

        if (unit == 'K' || unit == 'F' || unit == C) {
            resultHtml.innerHTML = calculateTemp(val,unit)
        }else{
            resultHtml.innerHTML = calculateDist(val,unit)
        }
    })
}

