
var spaceShip;
var bg1,bgImage;
var obstacles;
function preload(){
  bgImage=loadImage("starry-night-sky.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1=createSprite(windowWidth/2,windowHeight/2)
  bg1.addImage(bgImage);
  spaceShip=createSprite(windowWidth/2, windowHeight/2, 50, 50);
}

function draw() {
  background("black");  
  camera.position.x=spaceShip.x;
  camera.position.y=spaceShip.y;
  spawnObstacles();
  drawSprites();
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
    spaceShip.velocityX=-2;

  }
  if(keyCode===RIGHT_ARROW){
    spaceShip.velocityX=+2;
  }
  if(keyCode===DOWN_ARROW){
    spaceShip.velocityY=+2;
  }
  if(keyCode===UP_ARROW){
    spaceShip.velocityY=-2;
  }
  
}
function spawnObstacles(){
  if(frameCount%50===0){
    var x = random(spaceShip.x-width/2,spaceShip.x+width/2)
    var y = spaceShip.y-height/2
    obstacles=createSprite(x,y);
    
  }
}
 
