//Programmer:Rijul Joshi
//Programme for Global Car Safety Organisation


//GLOBAL VARIABLES

var car,wall ; 
var speed,weight ; 
var wallImg;

function setup(){
  
//Creating Canvas
  
   createCanvas(800,400);
  
   speed=random(55,90);
   weight=random(400,1500);

   car =  createSprite(50,200,50,50);
   car.shapeColor="white";
  
   wall = createSprite(500,200,50,350);
   wall.shapeColor="cyan"

   
}


function draw() {
  background("black");  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
    
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color(0,255,0);
        
      }
    
    } 
  
  drawSprites();
  
}