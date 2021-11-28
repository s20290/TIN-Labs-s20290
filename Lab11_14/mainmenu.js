function Mainmenu(){
  this.startx = width/2
  this.starty = height/2
  
  this.highscorex = width/2
  this.highscorey = height/2+50
  this.startHeight = 0
  this.highscoreHeight = 5
  this.show = ()=>{
    background(0)
    text('Start',width/2,height/2)
    textSize(12)
    fill(255,255,255)
    text('Highscores',width/2,height/2+50)
    textSize(12)
    fill(255,255,255)
    
  }
  this.startClicked = (x,y)=>{
    return x >= 200 && x <=230 && y >= 180 && y <= 205
  }
  this.highscoreClicked = (x,y)=>{
    return x >= 200 && y >= 240 && x <= 260 && y <= 250
  }
}