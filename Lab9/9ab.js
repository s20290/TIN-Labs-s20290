const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('./Lab9'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('views','./Lab9/views')
app.set('view engine','ejs')



app.get('/',(req,res)=>res.sendFile(path.resolve('./Lab9/9a.html')))

app.post('/jsonPost',(req,res)=>{
    console.log("Received JSON")
    res.setHeader('Content-Type', 'application/text');
    res.send(req.body.answer)
})
app.listen(3000,()=>console.log('Hello world'))
