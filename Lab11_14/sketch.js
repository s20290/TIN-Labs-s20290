const postUrl = "http://localhost:3000/jsonPost"

var player
var aliens = []
var bullets = []
var gameStart = false
var mainMenu = true
var highscores = true
var score
var mm
var hs
var playerDied = false
var gameEnd = false
function setup() {
  createCanvas(400, 400);
  mm = new Mainmenu()
  hs = new Highscore()
}

function draw() {
  if(mainMenu){
     mm.show()
  }else if(gameStart){
    game()
  }
}
function gameSetup(alienNum){
  console.log("setting up game")
  player = new Player()
  score = new Score()
  bullets = []
  for (let i = 0; i<alienNum;i++){
    aliens[i] = new Alien(((width/alienNum)*i)+(width/alienNum)/3,20)
  }
  playerDied = false
  gameStart = true
  highscores = false
  gameEnd = false
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
  if(aliens.length == 0){
    highscores = true
    gameEnd = true 
    gameStart = false
    saveScore(score)
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
      highscores = true
      gameStart = false
      gameEnd = true 
      saveScore(score)
      break
    }
    if(aliens[i].getLength() > width || aliens[i].x < 0 ){
       edge = true
    }
    if(aliens[i].y>height){
      aliens.splice(i,1)
      playerDied = true
      highscores = true
      gameStart = false
      gameEnd = true 
    }
  }
  if(edge){
    for (let i = 0; i<aliens.length;i++){
      aliens[i].moveDown()
    }
  }
  if(highscores ){
    hs.showHighscore()
  }
}
function keyPressed(){
  if(keyCode === 32){
    
    let bullet = new Bullet(player.x,player.y-20)
    bullets.push(bullet)
  }
}

function saveScore(playerScore){
  
  var xhr = new XMLHttpRequest()
    xhr.open("POST",postUrl,true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  
    xhr.onreadystatechange = ()=>{
        var done= 4, ok =200
        if(xhr.readyState == done && xhr.status == ok){
            console.log(playerScore)
        }
    }
    xhr.send(`{"score":"${playerScore.score}"}`)
    
  
}
function showHighscore(){
    
}

function mousePressed(){
  if(mainMenu){
    console.log("clicked")
    if(mm.startClicked(mouseX,mouseY)){
      gameSetup(10)
      mainMenu = false
      highscores = false
    }else if(mm.highscoreClicked(mouseX,mouseY)){
      console.log("clicked on highscore")
      mainMenu = false
      hs.showHighscore()
    }else{
      console.log("idk")
      console.log(mouseX)
      console.log(mouseY)
    } 
  }else if(highscores){
    if(hs.startClicked(mouseX, mouseY)){
      gameSetup(10)
      mainMenu = false
      highscores = false
    }
  }
  
}