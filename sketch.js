function preload(){
 bgimage=loadImage("road.png")
 boyimage=loadAnimation('png/Run (1).png',"png/Run (2).png","png/Run (3).png","png/Run (4).png","png/Run (5).png","png/Run (6).png","png/Run (7).png","png/Run (8).png")
Dogimage=loadAnimation('png/dog/Run (1).png',"png/dog/Run (2).png","png/dog/Run (3).png","png/dog/Run (4).png","png/dog/Run (5).png","png/dog/Run (6).png","png/dog/Run (7).png","png/dog/Run (8).png") 
Logimage=loadImage("Tree obstacle.png",)
Logimage=loadImage("Tree obstical2.png")


}

function setup() {
    createCanvas(1000,600);
    bg=createSprite(500,300);
    bg.addImage(bgimage)
    bg.scale=1.7
    bg.velocityX=-3

     boy= createSprite(100,500);
     boy.addAnimation("running",boyimage)
     boy.scale=0.3;

     Dog= createSprite(50,500);
     Dog.addAnimation("running",Dogimage)
     Dog.scale=0.3

  obstical = createSprite(200,500);
  obstical.addImage("Tree obstical.png")
  

    obstical2=createSprite(270,500)
    obstical2.addImage("Tree obstical2.png")
     
}

function draw() {
 background("black")
 if (bg.x <400){
   bg.x=500  
  
  
   if(keyDown("space")&& boy.y >= 100) {
    boy.velocityY = -12;
   
 }
 drawSprites();




}