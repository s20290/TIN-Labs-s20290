const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
const app = express()




app.use(bodyParser.urlencoded({extended: true}))
//console.log(app.get('appPath'));
app.get('/form',(req,res)=>res.sendFile(path.resolve('./Lab8/8b.html')))
app.post('/formdata',(req,res)=>{
    res.send(req.body)
    
    // res.send(200)
    
})
app.listen(3000,()=>console.log('Hello world'))