var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(400,100,80,50);
  fixedRect.shapeColor = "green";

  movingRect.velocityY = -5;
  
  fixedRect.velocityY = 5;
}


function draw() {
  background(0);  


if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2
&& fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2) {
  

  movingRect.velocityX = -movingRect.velocityX;

  fixedRect.velocityX = -fixedRect.velocityX;
}

if (movingRect.y-fixedRect.y <= movingRect.width/2+fixedRect.height/2
&& fixedRect.y-movingRect.y <= fixedRect.width/2+movingRect.height/2){
 
  movingRect.velocityY = -movingRect.velocityY;
  fixedRect.velocityY = -fixedRect.velocityY;
  
}
  
  drawSprites();
}