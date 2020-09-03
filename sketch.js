var car, car_image ,  car_red , car_yellow, car_green
var start, start_image
var wall
var speed, weight
var road, track

function preload() {
  track = loadImage("track.png")
 car_image = loadImage("car4.png") 
 car_red = loadImage("car1.png") 
 car_yellow = loadImage("car2.png") 
 car_green = loadImage("car3.png") 
start_image = loadImage("start.png")
}


function setup() {
  createCanvas(1500,800);

 

road = createSprite(350, 200, 1500, 50);
road.addImage("land", track)
road.scale = 1.5

road = createSprite(1000, 200, 1500, 50);
road.addImage("land", track)
road.scale = 1.5

road = createSprite(1650, 200, 1500, 50);
road.addImage("land", track)
road.scale = 1.5

start = createSprite(700, 550, 1500, 50);
start.addImage("banner", start_image)

  speed = random(65, 90)
  weight = random(400, 1500)
  
  car = createSprite(30, 200, 50, 50);
  car.velocityX = speed
  car.addAnimation("vehicle", car_image)
  car.addAnimation("vehicle2", car_red)
  car.addAnimation("vehicle3", car_yellow)
  car.addAnimation("vehicle4", car_green)
  car.scale = 0.5
  
  car.setCollider("rectangle", 0, 0, 20, 80, -45);

  

  wall = createSprite(1500, 200, 40, height/1);wall.shapeColor = "pink"

wall.setCollider("rectangle", 0, 0, 20, 80);
}

function draw() {
  background("black");  
  
  if(wall.x-car.x<(car.width+wall.width)/5){
car.velocityX = 0;


var deformation = 0.5*weight*speed*speed/22500

if(deformation>180){
car.shapeColor = "red"
car.changeAnimation( "vehicle2", car_red)

}

if(deformation<180){
  car.changeAnimation("vehicle3",car_yellow)
  car.shapeColor = "yellow" 
} 
 
if(deformation<100){
  car.shapeColor = "green"
  car.changeAnimation("vehicle4",car_green)
}
}
  
 
  
  drawSprites();
}