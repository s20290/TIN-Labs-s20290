function Player(){
  this.x = width/2
  this.y = height - 20
  this.playerWidth = 10
  this.playerHeight = 20
  this.dead = false
  this.show = ()=>{
    fill(255)
    // rect(this.x, height-20,20,20)
    triangle(this.x-this.playerWidth,this.y,
             this.x+this.playerWidth,this.y,
             this.x,this.y-this.playerHeight)
  }

  this.move = (e)=>{
    this.x += e*5
  }
  this.getLength = ()=>{
    return this.x + this.playerWidth*2
  }
  this.getHeight = ()=>{
    return this.y + this.playerHeight
  }
  this.rightEdge = ()=>{
    return this.getLength() > width ? true : false
  }
  this.leftEdge = ()=>{
    return this.x-this.playerWidth*2 < 0 ? true : false
  }
}