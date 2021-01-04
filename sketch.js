var fr,mr;
var go1,go2,go3,go4;
function setup() {
  createCanvas(1200,800);
  fr=createSprite(200, 200, 50, 80);
fr.shapeColor="lime";
  mr=createSprite(400, 200, 80, 30);
  mr.shapeColor="cyan";
  go1=createSprite(100, 100, 50, 50);
  go1.shapeColor="cyan";
  go2=createSprite(200, 100, 50, 50);
  go2.shapeColor="cyan";
  
}

function draw() {
  background(0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY
 
   if( isTouching(go1,mr)){
    mr.shapeColor="beige";
    go1.shapeColor="beige";
   }
else{
  mr.shapeColor="cyan";
  go1.shapeColor="lime";
}
  drawSprites();
}
function isTouching(o1,o2){
  if (o1.x-o2.x<o2.width/2+o1.width/2
    &&o2.x-o1.x<o1.width/2+o2.width/2
    &&o1.y-o2.y<o2.height/2+o1.height/2
   && o2.y-o1.y<o2.height/2+o1.height/2){
   return true;
  }
  else{
   return false;
  }
}