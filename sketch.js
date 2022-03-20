var fixedRect, movingRect;
var object1,object2,object3;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 0, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  

  /*movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;*/
  
 /* object1= createSprite(100,300,30,40);
object1.shapeColor = "green";


object2=createSprite(100,100,20,40);
object2.shapeColor = "green";*/

object3=createSprite(400,700,50,100);
object3.shapeColor = "green";
object3.velocityY= -5;
}

function draw() {
  background(0,0,0);  
 

  bounceOffF(object3,fixedRect);


  
  drawSprites();
}




