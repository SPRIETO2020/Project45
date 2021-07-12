/*function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}*/

var canvas;

//global variables
var chest, chestIMG, bg, bgIMG;
var wood1, wood2, wood3, woodIMG;
var iron1, iron2, iron3, ironIMG;
var book1, book2, book3, bookIMG;
var ranboo, ranbooForward, ranbooLeft, ranbooRight, ranbooBack;
var leftWall, rightWall, upperWall, lowerWall;


function preload() {
  //downloading images

  bgIMG = loadImage("sprites/background.png");

  ranbooForward = loadImage("sprites/forward_ranboo.gif");
  ranbooBack = loadImage("sprites/back_ranboo.gif");
  ranbooLeft = loadImage("sprites/left_ranboo.gif");
  ranbooRight = loadImage("sprites/right_ranboo.gif");

  woodIMG = loadImage("sprites/wood.PNG");
  ironIMG = loadImage("sprites/iron.PNG");
  bookIMG = loadImage("sprites/book.PNG");

  chestIMG = loadImage("sprites/chest.png");
}

function setup() {
  canvas = createCanvas(900,900);

  //create the bg
  bg = createSprite(450,450);
  bg.addImage(bgIMG);
  bg.scale = 8;

  //creating chest
  chest = createSprite(450,450);
  chest.addImage(chestIMG);
  chest.scale = 0.4;

  //create the player
  ranboo = createSprite(450,750,60,60);
  ranboo.addImage(ranbooForward);
  ranboo.scale = 0.7;

  //create material and mobs
  spawnMaterials();

  //walls
  leftWall = createSprite(-550, 450, 20, 2000);
  rightWall = createSprite(1450, 450, 20, 2000);
  upperWall = createSprite(450, 1450, 2000, 20);
  lowerWall = createSprite(450, -550, 2000, 20);
}


function draw() {
  background("black");
  drawSprites();
  console.log (ranboo.x, ranboo.y);

  //moving the camera
  camera.x = ranboo.x;
  camera.y = ranboo.y;

  //making the player move and change animation
  if(keyDown("UP_ARROW")) {
    ranboo.y = ranboo.y - 10;
    ranboo.addImage(ranbooBack);
  }
  if(keyDown("DOWN_ARROW")) {
    ranboo.y = ranboo.y + 10;
    ranboo.addImage(ranbooForward);
  }
  if(keyDown("LEFT_ARROW")) {
    ranboo.x = ranboo.x - 10;
    ranboo.addImage(ranbooLeft);
  }
  if(keyDown("RIGHT_ARROW")) {
    ranboo.x = ranboo.x + 10;
    ranboo.addImage(ranbooRight);
  }

  //making character stay in the perimeter
  ranboo.bounceOff(leftWall);
  ranboo.bounceOff(rightWall);
  ranboo.bounceOff(upperWall);
  ranboo.bounceOff(lowerWall);
}


function spawnMaterials() {
  //create wood
  wood1 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  wood1.addImage(woodIMG);
  wood1.scale = 0.1;
  wood2 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  wood2.addImage(woodIMG);
  wood2.scale = 0.1;
  wood3 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  wood3.addImage(woodIMG);
  wood3.scale = 0.1;

  //create iron
  iron1 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  iron1.addImage(ironIMG);
  iron1.scale = 0.1;
  iron2 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  iron2.addImage(ironIMG);
  iron2.scale = 0.1;
  iron3 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  iron3.addImage(ironIMG);
  iron3.scale = 0.1;

  //create books
  book1 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  book1.addImage(bookIMG);
  book1.scale = 0.1;
  book2 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  book2.addImage(bookIMG);
  book2.scale = 0.1;
  book3 = createSprite(random(-400,1300), random(-400,1190), 30, 30);
  book3.addImage(bookIMG);
  book3.scale = 0.1;
}