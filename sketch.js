var bullet, wall
var speed, weight,thickess

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(55,90)
  weight=random(30,52)
  bullet = createSprite(50,200,30,15)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
  bullet.velocityX= speed;
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  bullet.x=1160
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(deformation>10){
    bullet.shapeColor=color(255,0,0);
   }
   if(deformation<10){
     bullet.shapeColor=color(0,255,0)
   }
}
  drawSprites();
}