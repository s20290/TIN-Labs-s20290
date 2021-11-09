const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('./Lab11_14'))

app.use(bodyParser.urlencoded({extended: true}))
//console.log(app.get('appPath'));
app.get('/',(req,res)=>res.sendFile(path.resolve('./Lab11_14/index.html')))

app.listen(3000,()=>console.log('Hello world'))