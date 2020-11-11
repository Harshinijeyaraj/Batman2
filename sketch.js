const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var man,man1,ground;

function preload(){
 man1 = loadImage("man.png");

    
}

function setup(){
    createCanvas(400,800);
    var ground = (380,2,780,10);
    ground.x = ground.width/2;
    //camera.x = displayWidth/2;
    ground.velocityX = 0;
    man.addImage(man1);
    

  

   
    
}

function draw(){
    background(0,0)
    if (ground.x < 0){
        ground.x = ground.width/2;
       camera.position.x = displayWidth/2;
       //camera.y = displayHeight/2;
       
      }

      ground.display();
  
   drawSprites(); 
}   

