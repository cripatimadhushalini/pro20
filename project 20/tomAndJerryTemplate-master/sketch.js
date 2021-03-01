var cat,catImg,cat2Img,cat3Img;
var mouse,mouse2Img,mouse3Img,mouse4Img
var ground,groundImg;

function preload() {
    groundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg2 = loadAnimation("images/cat1.png");
}

function setup(){
    createCanvas(1000,800);

    ground = createSprite(500,400,10,10);
    ground.addImage(groundImg);

    cat = createSprite(800,600,10,10);
    cat.addAnimation(cat2Img);
    cat.addAnimation("Img",catImg);
    cat.scale = 0.2;

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("Img",catImg);
        cat.changeAnimation("catImg");
    }

  //For moving and changing animation write code here


}
