
function submitValidate(){
    let formArr = document.querySelector('#formValidation')
    let info = []
    for(const ele of formArr){
        if(ele.id == "email"){
            info.push(emailValidaiton(ele.value,ele.id))
        }else if(ele.id == "phone-number"){
            info.push(phoneCheck(ele.value,ele.id))
        }
    }
    let fail = true
    for(const i of info){
        if(!i[1]){
            document.getElementById(i[0]).style.background = "#FF0000"
            fail = false
        }
    }
    return fail
}

function phoneCheck(p,id){
    let validation = []
    validation.push(id)
    if(p == ""){
        validation.push(false)
        return validation
    }
    validation.push(true)
    return validation
}

function emailValidaiton(str,id){
    let validation = []
    validation.push(id)
    if(str == ''){
        validation.push(false)
        return validation
    }
    let reg = /^\S+@\S+\.\S+$/
    let regex = new RegExp(reg)
    console.log(regex.test(str))
    if(regex.test(str)){
        validation.push(true)
    }else{
        validation.push(false)
    }
    return validation
}
