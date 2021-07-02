
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,100,100,100,2,2);
}

function draw() 
{
  background(220);
 box1.show();
 box1.move();
 box1.bounce();
}

