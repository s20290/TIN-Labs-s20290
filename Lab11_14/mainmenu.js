function Mainmenu(){
  this.startx = width/2
  this.starty = height/2
  
  this.highscorex = width/2
  this.highscorey = height/2+50
  this.onScreen = true
  this.startWidth = textWidth('Start')
  this.highscoreWidth = textWidth('Width')
  this.startHeight = 0
  this.highscoreHeight = 5
  this.show = ()=>{
    background(0)
    text('Start',width/2,height/2)
    fill(255,255,255)
    text('Highscores',width/2,height/2+50)
    fill(255,255,255)
  }
  this.startClicked = (x,y)=>{
    return (x < this.startx + this.startWidth && x > this.startx) && (y < this.starty - this.startHeight && y > this.starty) ? true:false
  }
  this.highscoreClicked = (x,y)=>{
    
  }
}