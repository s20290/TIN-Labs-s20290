const express = require('express')
const app = express()

app.get('/hello',(req,res)=>res.send('hello'))
app.listen(3000,()=>console.log('Hello world'))