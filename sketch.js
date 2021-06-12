var spacebgImg;
var hasDocked;
var space1, space2, space3, space4,iss
var space1Img, space2Img, space3Img, space4Img,issImg;
var rand;
var spaceCraft;
function preload(){

  spacebgImg = loadImage("spacebg.jpg");
  space1Img = loadImage("spacecraft1.png");
  space2Img = loadImage("spacecraft2.png");
  space3Img = loadImage("spacecraft3.png");
  space4Img = loadImage("spacecraft4.png");
  issImg = loadImage("iss.png");
}


function setup() {
  createCanvas(1300,500);

  iss =createSprite(600, 250, 50, 50);
  iss.addImage("iss",issImg);
  iss.scale = 0.8;

  space1 = createSprite(580,400,50,50);
  space1.addImage("space1",space1Img);
  space1.scale = 0.3;

  space2 = createSprite(580,400,50,50);
  space2.addImage("space2",space2Img);
  space2.scale = 0.3;

  space3 = createSprite(580,400,50,50);
  space3.addImage("space3",space3Img);
  space3.scale = 0.3;

  space4 = createSprite(580,400,50,50);
  space4.addImage("space4",space4Img);
  space4.scale = 0.3;
}


function draw() {
  background(spacebgImg);  

  if(!hasDocked){
        
if(keyDown(UP_ARROW)){
space4.y=space4.y-1;
space4.addImage("space4",space4Img);
}

    if(keyDown(DOWN_ARROW)){
      space2.y=space2.y+1;
      space2.addImage("space2",space2Img);
    }

    if(keyDown(LEFT_ARROW)){
      space3.x=space3.x-1;
      space3.addImage("space3",space3Img);
    }

    if(keyDown(RIGHT_ARROW)){
      space1.x=space1.x+1;
      space1.addImage("space1",space1Img);
    }

    

  }

 
  drawSprites()
 
}