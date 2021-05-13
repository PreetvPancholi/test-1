//var backgroundImg;
//var Player,playerImge;
//var bullet,bulletImg;

//var zom,zomImg1,zomImg2,deadZomImg;
//var virus,virusImg;
//var booster,boosterImg,coins,coinsImg;
//var zombie
//var score = 0;
//var enemyGroup;


//function preload() {
 //   backgroundImg = loadImage("../Images/bg.png");
 //   playerImge = loadImage("../Images/Player1.gif");
 //   zomImg1 = loadImage("../images/zom1.png");
//    zomImg2 = loadImage("../images/zom2.png");
 //   bulletImg = loadImage("../images/bullet.png");
   // virusImg = loadImage("../images/virus.png");
  //  deadZomImg = loadImage("../images/zomDead.png");
    //boosterImg = loadImage("../images/power.png");
  ////  coinsImg = loadImage("../images/coins.png");

//}

//function setup(){
//createCanvas(1000,800);

//background = createSprite(400,300,1000,700)

//background.addImage("backgroundImg",backgroundImg);
//background.x = background.width /2;


//Player.scale = 0.4;
//Player = createSprite(500,400,25,25);
//Player.scale = 0.4;
// // Player.addImage("Player",playerImge);

// // enemyGroup = new Group();
// powerGroup = new Group();



// }


// function draw() {
 
  

  //background.velocityX = -10;

 //  if(background.x < 200){
  //   background.x = background.width/2;
  // }
  

   //  if(keyDown("w")){
    //     Player.y =Player.y-7;
   //    }
     //  if(keyDown("s")){
    //     Player.y =Player.y+7;
     //  }
    //   if(keyDown("a")){
    //     Player.x =Player.x-5;
    //   }
    //   if(keyDown("d")){
    //     Player.x =Player.x+5;
      // }


  

    // if(keyDown("space")){
     //  bullet = createSprite(Player.x+60,Player.y-75);
     //  bullet.addImage("bullet",bulletImg);
    //   bullet.scale = 0.05 ;
     //bullet.x = Player.x;
     //bullet.y = Player.y;
    //   bullet.velocityX = 50 ;
    // }
    



   // enemy();
   //  power();

   // if(enemyGroup.isTouching(bullet)){
     //   score = score + 1;

    //   }
    // }


   // if(enemyGroup.isTouching(bullet)){
   //   score = score+1;
     
   // }
  
//drawSprites();
////textSize(50);
//fill("red");
//text("score:"+ score, 400,50 );
//}

//function power(){
 
 // var rand1 = Math.round(random(50,200));

 // if(frameCount % rand1 === 0 ){
   // var powerUps = createSprite(1050,30)
  //  powerUps.velocityX = -6;
  //  powerUps.scale = 0.3;
      
   // powerUps.y = Math.round(random(50,400));
    //  
   // var rand = Math.round(random(1,2));
   // switch(rand) {
    //  case 1: powerUps.addImage(boosterImg);
     //   break;
    ////  case 2: powerUps.addImage(coinsImg);
     //   break;
     // default: 
      //  break;
    //}
  //}


// }


//function //enemy() {
   
    //var rand1 = Math.round(random(50,200));
  
   // if(frameCount % rand1 === 0 ){
   //   zombie = createSprite(1050,30)
    //  zombie.velocityX = -6;
   //   zombie.scale = 0.3;
  
      
        
      //zombie.y = Math.round(random(50,400));
        
    //  var rand = Math.round(random(1,3));
    //  switch(rand) {
    //   case 1: zombie.addImage(zomImg1);
     //   break;
   //     case 2: zombie.addImage(zomImg2);
     //   break;
    //    case 3: zombie.addImage(virusImg);
      //    break;
    //     default: 
    //      break;
  //    }
     // enemyGroup.add(zombie);
  //  }    
 
  
//}
//
