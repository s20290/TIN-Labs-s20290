function Player(){
  this.x = width/2
  this.y = height - 20
  this.playerWidth = 10
  this.playerHeight = 20
  
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
}