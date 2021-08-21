var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor="red"

  console.log(box)

}

function draw() 
{
   background(30);


   if(keyDown(LEFT_ARROW)){
     box.position.x= box.position.x-5;
   }

 // rectMode(CENTER)
  drawSprites();
}




