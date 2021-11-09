var player
var aliens = []
var bullets = []
function setup() {
  createCanvas(400, 400);
  player = new Player()
  
  for (let i = 0; i<5;i++){
    aliens[i] = new Alien(((width/5)*i)+(width/5)/3,20)
  }
  
}

function draw() {
  game()
}
function mainMenu(){
  
}
function game(){
  background(51)
  player.show()
  for (let i = 0; i<bullets.length;i++){
    bullets[i].show()
    bullets[i].move()
    for (let j = 0; j<aliens.length;j++){
      if(bullets[i].hits(aliens[j])){
        aliens.splice(j,1)
        bullets.splice(i,1)
      }
    }
    if(bullets[i].y < -20){
       bullets.splice(i,1)
    }
    
  }
  for (let i = 0; i<aliens.length;i++){
    aliens[i].show()
  }
}
function keyPressed(){
  if(keyCode === 32){
    
    let bullet = new Bullet(player.x,player.y-20)
    bullets.push(bullet)
  }
  
  if(keyCode === RIGHT_ARROW){
    player.move(1)
  }else if(keyCode === LEFT_ARROW){
    player.move(-1)
  }
}