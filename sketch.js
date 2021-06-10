var iss,ISS,space;
var spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4;
var spacecraft1;
var hasDocked = false;

function preload(){
  space = loadImage("Docking-undocking/spacebg.jpg");
  iss = loadImage("Docking-undocking/iss.png");
  spaceCraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceCraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceCraft4 = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(200,350,10,10);
  spacecraft.x = Math.round(random(100,700));
  ISS = createSprite(400,150,10,10);

  ISS.addImage(iss);
  spacecraft.addImage(spaceCraft1);

  spacecraft.scale = 0.2;
  ISS.scale = 0.7;

}

function draw() {
  if(!hasDocked){
    if(keyDown(UP_ARROW)){
      spacecraft.y -= 10;
      spacecraft.addImage(spaceCraft2);
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 10;
      spacecraft.addImage(spaceCraft2);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x -= 10;
      spacecraft.addImage(spaceCraft3);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 10;
      spacecraft.addImage(spaceCraft4);
    }
  }
  if(spacecraft.y <= (ISS.y+70) && spacecraft.x <= (ISS.x-10)){
    hasDocked = true;
    textSize(30);
    fill(255,0,0);
    text("Docking Successful",200,300);
  }
  background(space);  
  drawSprites();
}