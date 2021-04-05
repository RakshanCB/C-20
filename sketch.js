var fixedRect, movingRect;
var r1,r2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  r1 = createSprite(200, 50, 50, 80);
  r2 = createSprite(200, 350, 50, 80);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.debug = true;
  movingRect.debug = true;

  r1.velocityY = 5;
  r2.velocityY = -5;
  
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
    ){
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  }

  if(r1.x - r2.x < r1.width/2+r2.width/2
    && r2.x - r1.x < r1.width/2+r2.width/2)
    {
      r1.velocityX = r1.velocityX * (-1);
      r2.velocityX = r2.velocityX * (-1);
    }

    if(r2.y - r1.y < r1.height/2+r2.height/2
      && r1.y - r2.y < r1.height/2+r2.height/2){

        r1.velocityY = r1.velocityY * (-1);
        r2.velocityY = r2.velocityY * (-1);

      }
  

  drawSprites();
}