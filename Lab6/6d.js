function submitForm(){
    let formArr = document.querySelector('#myform')
    
    
    var tbodyRef = document.getElementById('mytable');
    let neededRows = formArr.length - tbodyRef.rows.length
    if(neededRows > 0){
        for(let i= 0; i<neededRows;i++){
            var newRow = tbodyRef.insertRow()
        }
    }
    let table = document.querySelector("#mytable").getElementsByTagName('tr')
    for(let i = 0;i< table.length;i++){
        console.log(formArr.getAttributeNames())
        for(let k = 0;k<formArr[i].length;k++){
            
        }
    }
}