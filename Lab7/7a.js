const events = require('events')
const errorEmitter = new events.EventEmitter()
errorEmitter.on('error',err=>{
    console.log(`ERROR: ${err.message}`)
})
var http = require('http')
var server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.write(processParameter(req.url))
    res.end()
})

function processParameter(req){
    if(req == null || undefined){
        errorEmitter.emit('error',new Error(`Not a request ${req}`))
        // return "Not a request"
    }
    let tmpStr = req.trim().split(/(\d+)/)
    let nums = []
    if(tmpStr.length != 5){
        errorEmitter.emit('error',new Error(`Unknown request ${req}`))
        // return "Unknown request"
    }
    nums.push(parseFloat(tmpStr[1]))
    nums.push(parseFloat(tmpStr[3]))
    switch(tmpStr[2]){
        case '+':
            return addOperation(nums)
        case '-':
            return subOperation(nums)
        case '*':
            return mulOperation(nums)
        case '/':
            return divOperation(nums)
        default:
            return ""
    }
}

function addOperation(arr){
    return ""+(arr[0]+arr[1])
}
function subOperation(arr){
    return ""+(arr[0]-arr[1])
}
function mulOperation(arr){
    return ""+(arr[0]*arr[1])
}
function divOperation(arr){
    return ""+(arr[0]/arr[1])
}
server.listen(8000,"127.0.0.1")
console.log("Server running at http://127.0.0.1:8000/")