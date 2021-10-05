function submitForm(){
    let formArr = document.querySelector('#myform')
    
    
    var tbodyRef = document.getElementById('mytable');
    let neededRows = formArr.length - tbodyRef.rows.length
    if(neededRows > 0){
        for(let i= 0; i<neededRows;i++){
            if(formArr[i].value != ''){
                tbodyRef.insertRow()
            }
        }
    }
    let table = document.querySelector("#mytable").getElementsByTagName('tr')
    for(let i = 0;i< table.length;i++){
        var c1 = table[i].insertCell()
        var c2 = table[i].insertCell()
        c1.innerText = formArr[i].id
        c2.innerText = formArr[i].value
    }
}