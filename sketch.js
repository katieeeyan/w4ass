let colorPal = ['#D73220','#F9ECE5','#68150A','#0B78B3','#1F0062'];

let unitW, unitH;

let numShapes;
let spacing;

let angle1;
let rotSpeed1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle1 = 0;
  rotSpeed1 = random(-1,3);

  unitW = width/8;
  unitH = height/8;

  numShapes = colorPal.length;
  spacing = 1/numShapes;
}

function draw() {
  background(0);

  strokeWeight(15);
  noFill();

  push();
  translate(width/2,height/2);
  rectMode(CENTER);
  rotate(angle1);

  let sqW = unitW*3;
  let sqH = unitH*4;
  let sqWSpacing = sqW*spacing;
  let sqHSpacing = sqH*spacing;

  stroke(255,105,180);
  rect(0,0,sqW+40,sqH+40);

  for (let i = 0; i < numShapes; i++) {
    stroke(colorPal[i]);
    rect(0,0,sqW,sqH);
    sqW -= sqWSpacing;
    sqH -= sqHSpacing;
  }

  pop();

  angle1 += rotSpeed1;
}