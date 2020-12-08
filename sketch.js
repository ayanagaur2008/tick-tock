var hr, min, sec;
var scAngle, mnAngle, hrAngle;
var line;
function setup() {
  createCanvas(900,700);
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES);
  

  
  
 
  
}

function draw() {
  background(0);  
  hr = hour();
  min = minute();
  sec = second();

  translate(width/2,height/2);
  rotate(-90);


  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr %12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();


  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();
  

  
  push();
  rotate(hrAngle);
 
  stroke("blue");
  strokeWeight(9);
  line(0, 0, 50, 0);
  pop();
  

  noFill();
  strokeWeight(10);
  
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  
  stroke(0,255,0);
  arc(0,0,270,270,0,mnAngle);

  
  stroke(0,0,255);
  arc(0,0,240,240,0,hrAngle);

  rotate(90);

  strokeWeight(1)
  fill("yellow");
  textStyle(ITALIC);
  textSize(45)
  text(hr+":"+min+":"+sec, 200, -250);

}
