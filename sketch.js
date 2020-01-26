function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(30,60,50,50);
  rect1=createSprite(700, 100, 50, 50);
  rect2=createSprite(30,100,50,50);
  rect1.velocityX=-5;
  rect2.velocityX=5;
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  bounceoff(rect1,rect2);

if (istouching(fixedrect,movingrect) ) {
   fixedrect.shapeColor="red";
   movingrect.shapeColor="red";

  } 
  else{
    fixedrect.shapeColor="blue";
   movingrect.shapeColor="blue";
  }
  drawSprites();
}
