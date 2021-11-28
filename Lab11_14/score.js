function Score(){
  this.x = width/2
  this.y = 20
  this.score = 0
  this.show = ()=>{
    textSize(20);
    text(`Score: ${this.score}`, this.x, this.y);
    fill(255, 255, 255);
  }
  this.addScore = ()=>{
    this.score++
  }
}