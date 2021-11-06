var retFixo, retMovendo, retinhoteste;
function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  retinhoteste = createSprite(300, 300, 30, 30)
  retinhoteste.shapeColor = "green";
  retinhoteste.debug = true;
  
}
function draw() {
  background(0, 0, 0);
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if (isTouching(retinhoteste, retMovendo)){
    retinhoteste.shapeColor = "blue"
    retMovendo.shapeColor = "blue"
  }
  else{
    retinhoteste.shapeColor = "green"
    retMovendo.shapeColor = "green"
  }
  drawSprites();
}

