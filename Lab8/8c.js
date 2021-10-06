

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.set('views','D:\\pjatk\\3rd year\\5thSemester\\TIN\\labs\\Lab8\\views')
app.set('view engine','ejs')

app.get('/form',(req,res)=>res.sendFile("D:\\pjatk\\3rd year\\5thSemester\\TIN\\labs\\Lab8\\8b.html"))
app.post('/formdata',(req,res)=>{
    // res.send(req.body)
    // res.send(200)
    res.render('D:\\pjatk\\3rd year\\5thSemester\\TIN\\labs\\Lab8\\views\\8c.ejs',{fname:"waddup"})
})
app.listen(3000,()=>console.log('Hello world'))