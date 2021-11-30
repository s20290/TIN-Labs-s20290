const express = require('express')
const fs = require('fs')
var path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('./Lab11_14'))
// app.use(express.urlencoded())
app.use(express.json());


app.get('/',(req,res)=>res.sendFile(path.resolve('./Lab11_14/index.html')))

app.get('/getHighscore',(req,res)=>{
    console.log("Received GET request, sending file..")
    
    fs.readFile('./Lab11_14/highscores.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
        res.setHeader('Content-Type', 'application/text');
        res.send(data)
    });
    
})
app.post('/jsonPost',(req,res)=>{
    console.log("Received JSON")
    console.log(req.body.score)
    res.setHeader('Content-Type', 'application/text');
    res.send(req.body.score)
    
    fs.appendFile('./Lab11_14/highscores.txt', `${req.body.score}\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
})



app.listen(3000,()=>console.log('Hello world'))


// var lineReader = require('readline').createInterface({
    //     input: require('fs').createReadStream('./Lab11_14/highscores.txt')
    // });
    // let arr = []
    // lineReader.on('line', function (line) {
    //     arr.push(line)
    //     console.log('Line from file:', line);
    // });
    // res.setHeader('Content-Type', 'application/text');
    // res.send(arr)