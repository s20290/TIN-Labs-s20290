function Alien(x,y){
  this.x = x
  this.y = y;
  this.alienWidth = 20
  this.alienHeight = 20
  
  this.xmove = 1
  this.ymove = 0
  this.show = ()=>{
    fill(255)
    rect(this.x, this.y,this.alienWidth,this.alienHeight)
  }

  this.move = ()=>{
    this.x += this.xmove
    this.y += this.ymove
  }
  this.getLength = ()=>{
    return this.x + this.alienWidth
  }
  this.getHeight = ()=>{
    return this.y + this.alienHeight
  }
  this.moveDown = ()=>{
    this.xmove *= -1
    this.y += this.alienHeight
  }
  this.hits = (other)=>{
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.alienWidth/2 + other.playerWidth/2+other.playerHeight/2) {
      console.log("hit!")
      return true;
    } else {
      return false;
    }
  }
}