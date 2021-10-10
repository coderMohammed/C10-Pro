var ship,shipImg;
var bg,bgImg;

function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
bgImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  bg = createSprite(200,200);
  bg.addImage("bg",bgImg);
  bg.scale = 0.35;

  ship = createSprite(200,200);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.35;

}

function draw() {
  background("blue");
 
  bg.velocityX = -4;
  if(bg.x<0){
    bg.x = 200
  }

  drawSprites();
}