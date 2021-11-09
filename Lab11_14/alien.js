function Alien(x,y){
  this.x = x
  this.y = y;
  this.alienWidth = 20
  this.alienHeight = 20
  
  this.show = ()=>{
    fill(255)
    rect(this.x, this.y,this.alienWidth,this.alienHeight)
  }

  this.move = ()=>{
    this.y += this.alienHeight*2
  }
}