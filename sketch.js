var Iss,spacecraft
var bg,spacecraftImg,issImg,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var hasDocked = false;
function setup() {
  createCanvas(displayWidth,displayHeight);
   Iss = createSprite(displayWidth/2+20, displayHeight/2-30, 50, 50);
   Iss.addImage("Iss",issImg);

   spacecraft = createSprite(displayWidth/2 - 200,displayHeight/2 + 200,50,50);
   spacecraft.addImage("spacecraft",spacecraftImg);
   spacecraft.scale = 0.55;

}
function preload(){
  bg = loadImage("spacebg.jpg");
  spacecraftImg = loadImage("spacecraft1.png");
  issImg = loadImage("iss.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");

}
function draw() {
  background(bg); 
  
  if(!hasDocked){
  if(keyDown("up")){
    spacecraft.changeAnimation("spacecraft");
     spacecraft.y -= 5;
  }
  if(keyDown("down")){
    spacecraft.addAnimation("down",spacecraft2Img);
    spacecraft.changeAnimation("down");
    spacecraft.scale = 0.495;
    spacecraft.y += 5;
  }
  if(keyDown("right")){
    spacecraft.addAnimation("right",spacecraft4Img);
    spacecraft.changeAnimation("right");
    spacecraft.scale = 0.495;
    spacecraft.x += 5;
  }
  if(keyDown("left")){
    spacecraft.addAnimation("left",spacecraft3Img);
    spacecraft.changeAnimation("left");
    spacecraft.scale = 0.495;
    spacecraft.x -= 5;
  }
  if(spacecraft.y <= (Iss.y+140) && spacecraft.x <= (Iss.x-10)){
    hasDocked = true;
    console.log(hasDocked);
    
  }
  }
  if(hasDocked === true){
    textSize(90);
    fill("white");
    text("Docking Successful",500,700);
  }
  console.log(spacecraft.x,spacecraft.y);
  drawSprites();
}