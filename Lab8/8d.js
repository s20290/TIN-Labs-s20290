
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const filename = path.resolve('./Lab8/8d.html')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('views','./Lab8/views')
app.set('view engine','ejs')

app.get('/form',(req,res)=>res.sendFile(filename))

app.post('/formdata',(req,res)=>{
    // res.send(req.body)
    // res.send(200)
    res.render('./8c.ejs',{fname:req.body.fname, lname:req.body.lname, phonenumber:req.body.phonenumber})
})

app.post('/jsondata',(req,res)=>{
    res.render('./8d.ejs',{fname:req.body.fname, lname:req.body.lname, phonenumber:req.body.phonenumber})
})

app.listen(3000,()=>console.log('Hello world'))