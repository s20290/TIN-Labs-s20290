var player
var aliens = []
var bullets = []
var gameStart = false
var mainMenu = true
var highscores = false
var score
var mm
var playerDied = false
function setup() {
  createCanvas(400, 400);
  mm = new Mainmenu()
  
}

function draw() {
  if(playerDied){
    mm.show()
  }else{
    if(gameStart){
      game()  
    }else{
      gameSetup(10)
    }
  }
  
}
function gameSetup(alienNum){
  player = new Player()
  score = new Score()
  for (let i = 0; i<alienNum;i++){
    aliens[i] = new Alien(((width/alienNum)*i)+(width/alienNum)/3,20)
  }
  gameStart = true
}
function game(){
  background(51)
  player.show()
  score.show()
  if(!player.rightEdge()){
    if(keyIsDown(RIGHT_ARROW)){
      player.move(1)
    }
  }
  if(!player.leftEdge()){
    if(keyIsDown(LEFT_ARROW)){
      player.move(-1)
    }   
  }
  let prevAliens = aliens.length
  for (let i = 0; i<bullets.length;i++){
    
    bullets[i].show()
    bullets[i].move()
    for (let j = 0; j<aliens.length;j++){
      
      try{
        if(bullets[i].hits(aliens[j])){
          aliens.splice(j,1)
          bullets.splice(i,1)
          score.addScore()
        }
      }catch(e){
        
      }
    }
    
    try{
      if(bullets[i].y < -20){
       bullets.splice(i,1)
    }
    }catch(e){
      
    }
    
    
  }
  let edge = false
  for (let i = 0; i<aliens.length;i++){
    aliens[i].show()
    aliens[i].move()
    if(aliens[i].hits(player)){
       playerDied = true
    }
    if(aliens[i].getLength() > width || aliens[i].x < 0 ){
       edge = true
    }
  }
  if(edge){
    for (let i = 0; i<aliens.length;i++){
      aliens[i].moveDown()
    }
  }
}
function keyPressed(){
  if(keyCode === 32){
    
    let bullet = new Bullet(player.x,player.y-20)
    bullets.push(bullet)
  }
}

function mousePressed(){
  if(mm.startClicked(mouseX,mouseY)){
     console.log("clicked on start")
  }else{
    console.log("idk")
  }
  if(mm.highscoreClicked(mouseX,mouseY)){
     
  }
}