function Highscore(){
  const highscoreUrl = "http://localhost:3000/getHighscore"
  
  
  this.setHighscore = ()=>{
    var xhr = new XMLHttpRequest()
    xhr.open("GET",highscoreUrl,true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = ()=>{
      var done= 4, ok =200
      if(xhr.readyState == done && xhr.status == ok){
          console.log("im fine")
          let tmp = xhr.responseText.split('\n')
          tmp.splice(tmp.length-1,1)
          this.scores = tmp.map((x)=>{
            return parseInt(x,10)
          })
          this.scores.sort(function(a,b){return b-a})
          this.drawHighscores()
      }
    }
    xhr.send()
  }
  this.drawHighscores = ()=>{
    console.log(this.scores.length)
    let padding = 20
    let x = width/2 - 150
    let initialy = height/5
    let len = this.scores.length <= 5 ? this.scores.length : 5
    for(let i = 1; i<= len; i++){
      console.log("hello")
      initialy += padding
      textSize(12)
      textAlign(LEFT)
      text(`${i}. ${this.scores[i-1]}`,x, initialy)
      
    }
  }
  this.showHighscore = ()=>{
    background(0)
    
    textSize(12)
    text('Start',width/2,height/2)
    
    textSize(20)
    textAlign(LEFT)
    text("HIGHSCORES",width/2 - 200, height/5)
    
    

    this.setHighscore()
  }
  this.startClicked = (x,y)=>{
    return x >= 200 && x <=230 && y >= 180 && y <= 205
  }
}