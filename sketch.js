
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 var survialTime=0;
function preload(){
  
  
   monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyRunning)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width /2;
  
  console.log(ground.x)
  
  
  
  FoodGroup=createGroup()
  obstaclesGroup=createGroup()
}


function draw() {
  background("lightBlue")
 
  
  stroke("red")
  textSize("20")
  fill("red");
  text("score " + score, 500, 40)
  
  stroke("black")
  textSize(20)
  fill("blck");
 survivalTime = Math.ceil(frameCount / frameRate())
    text("SURVIVAL TIME =" + survivalTime, 100, 50)
  
  if(keyDown("space")){
     monkey.velocityY=-12
     
     }
  
  if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
  
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground)
  swapnFood();
  swapnObstacles();
drawSprites();
  
}

function swapnFood(){
  if(frameCount % 80 === 0){
    var food = createSprite(600,20,40,2);
    food.y=Math.round(random(120,200))
    food.addImage(bananaImage);
    food.scale=0.1;
    food.velocityX=-3
    FoodGroup.add(food)
    food.lifetime=300
  }
 
}
function swapnObstacles() {
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600, 330, 60, 60);
    obstacle.velocityX = -4
    obstacle.lifetime = 590;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15
    
    obstaclesGroup.add(obstacle)
  }
}
  



