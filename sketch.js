//making variables
var trex, trex_running, trex_jump, edges, groundImage, ground;

function preload(){
  //make animation of different action of trex and ground
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_jump = loadImage("trex1.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  //creating canvas
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,162.5,20,50);

  //creating edges
  edges = createEdgeSprites();
  
  //creating ground and it's image
  ground = createSprite(200,180,400,5);
  ground.addImage("grond_moving",groundImage);

  //adding scale
  trex.scale = 0.5;

}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y);

  //adding animations of jumping and running of trex
  //animation of jumping when in air 
  if (trex.y>162.5)
  {
    trex.addImage("jump", trex_jump);
  }
  else if(trex.y<162.6)
  {
  //animation of running when on ground
    trex.addAnimation("running", trex_running);
  }
   
   //jump when space key is pressed and trex is on ground
  if(trex.y>162.5 && keyDown("space"))
  {
    trex.velocityY = -9;
    trex.addImage("trex_jump", trex_jump);
  }

  //moving the ground backward
  ground.velocityX=-5;

  //bring ground to it's original position
  if (ground.x<0)
  {
    ground.x=ground.width/2;
  }

  //making the velocity more (move down) as it goes up
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  if(trex.y>162.5)
  {
    trex.y=162.5;
  }

  //drawing sprites
  drawSprites();
}