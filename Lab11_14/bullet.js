function Bullet(x,y){
  this.x = x
  this.y = y
  this.bulletWidth = 5
  this.bulletHeight = 5
  
  this.show = ()=>{
    fill(255)
    // rect(this.x, height-20,20,20)
    ellipse(this.x,this.y,this.bulletWidth,this.bulletHeight)
  }

  this.move = ()=>{
    this.y -= 2
  }
  
  this.hits = (alien)=>{
    return (this.x <= alien.x+alien.alienWidth && this.x >= alien.x) && (this.y <= alien.y+alien.alienHeight && this.y >= alien.y) ? true : false
  }
}