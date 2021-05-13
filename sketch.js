var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score=0;

var gameOver, restart;

var backgroundImg;
var Player,playerImge;
var bullet,bulletImg;

var zom,zomImg1,zomImg2,deadZomImg;
var virus,virusImg;
var booster,boosterImg,coins,coinsImg;
var zombie;

var enemyGroup;

var boosterScore = 100


function preload(){
    backgroundImg = loadImage("../Images/bg.png");
    playerImge = loadImage("../Images/Player1.gif");
    zomImg1 = loadImage("../images/zom1.png");
    zomImg2 = loadImage("../images/zom2.png");
    bulletImg = loadImage("../images/bullet.png");
    virusImg = loadImage("../images/virus.png");
    deadZomImg = loadImage("../images/zomDead.png");
    boosterImg = loadImage("../images/power.png");
    coinsImg = loadImage("../images/coins.png");
}

function setup() {
    createCanvas(1000, 800);

    bg = createSprite(400,300,1000,700)
    bg.addImage("backgroundImg",backgroundImg);
    bg.x = bg.width /2;


    Player = createSprite(500,400,25,25);
    Player.scale = 0.4;
    Player.addImage("Player",playerImge);   

    //  ground.velocityX = -(6 + 3*score/100);
  
    //gameOver = createSprite(300,100);
    //gameOver.addImage(gameOverImg);
  
    //restart = createSprite(300,140);
    //restart.addImage(restartImg);
  
    // gameOver.scale = 0.5;
    // restart.scale = 0.5;

    //gameOver.visible = false;
    // restart.visible = false;
   
    coinsGroup = new Group();
    zombieGroup = new Group();
    boosterGroup = new Group();
    bulletGroup = new Group();

  
    score = 0;
    coins = 0
}

function draw() {
  //trex.debug = true;
  background(255);


  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/boosterScore);
    //ground.velocityX = -(6 + 3*score/100);

    
    
    if(keyDown("w")){
      Player.y =Player.y-7;
    }
    if(keyDown("s")){
      Player.y =Player.y+7;
    }
    if(keyDown("a")){
      Player.x =Player.x-5;
    }
    if(keyDown("d")){
      Player.x =Player.x+5;
    }

    if(keyDown("space")){
        bullet = createSprite(Player.x+60,Player.y-75);
        bullet.addImage("bullet",bulletImg);
        bullet.scale = 0.05 ;
        bullet.velocityX = 50 ;
        bulletGroup.add(bullet);
      }

  
    //trex.velocityY = trex.velocityY + 0.8
  

    if(bg.x < 200){
        bg.x = bg.width/2;
      }
  
//here
    zombie();
    coin();
    booster();

    if(zombieGroup.isTouching(Player)){
        gameState = END;
    }

    if(zombieGroup.isTouching(bulletGroup)){
       // score = score + 1
       // zombieGroup.remove(zom);
        zombieGroup.destroyEach();
        bulletGroup.destroyEach();
        
    }

    if(coinsGroup.isTouching(Player)){
       coins = coins + 1;
       coinsGroup.destroyEach();        
    }

    if(boosterGroup.isTouching(Player)){
        for(var counter =10; counter>=0; counter--){
            boosterScore = 500;
            zombieGroup.setVelocityXEach = -2
        }
    }
 

    
  }
  else if (gameState === END) {
    //gameOver.visible = true;
    //restart.visible = true;
    
    //set velcity of each game object to 0
    //trex.velocityY = 0;
    zombieGroup.setVelocityXEach = 0;
    coinsGroup.setVelocityXEach(0);
    boosterGroup.setVelocityXEach(0);
    //change the trex animation
    //trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    zombieGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    boosterGroup.setLifetimeEach(-1);
    
    //if(mousePressedOver(restart)) {
    //  reset();
    //}
  }
  
  
  drawSprites();
  textSize(50);
  fill("red");
  text("Score: "+ score, 200,50);
  text("Coins: "+ coins, 600,50);
}

function booster() {
  //write code here to spawn the clouds

  if (frameCount % 300 === 0) {
    var boost = createSprite(600,120,40,10);
    boost.y = Math.round(random(80,650));
    boost.addImage(boosterImg);
    boost.scale = 0.5;
    boost.velocityX = -3;
    
     //assign lifetime to the variable
     boost.lifetime = 200;
    
    //adjust the depth
    boost.depth = Player.depth;
    Player.depth = Player.depth + 1;
    
    //add each cloud to the group
    boosterGroup.add(boost);
  }
  
}

function coin(){

    if (frameCount % 100 === 0) {
        var coins = createSprite(600,120,40,10);
        coins.y = Math.round(random(80,650));
        coins.addImage(coinsImg);
        coins.scale = 0.5;
        coins.velocityX = -5;
        
         //assign lifetime to the variable
         coins.lifetime = 200;
        
       
        
        //add each cloud to the group
        coinsGroup.add(coins);
      }

}



function zombie() {

    var rand2 = Math.round(random(50,250))
  if(frameCount % rand2 === 0) {
    var zom = createSprite(1050,165,10,40);
    zom.y = Math.round(random(50,650));
    //obstacle.debug = true;
    zom.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: zom.addImage(zomImg1);
              break;
      case 2: zom.addImage(zomImg2);
              break;
      case 3: zom.addImage(virusImg);
              break;

      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    zom.scale = 0.5;
    zom.lifetime = 300;
    //add each obstacle to the group
    zombieGroup.add(zom);
  }
}


function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    
   zombieGroup.destroyEach();
    boosterGroup.destroyEach();
    coinsGroup.destroyEach();
    score = 0;
    coins = 0 ;
  }
 
