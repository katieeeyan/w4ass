// Week 4 – Rotating Grid
// Started from the class Two Squares (push/pop) and Loop Review examples.
// Added: a whole grid of nested squares, each with its own random
// rotation speed and random color from the palette.
// Every time you click, the grid is randomized again.

// color palette (same idea as class, my own colors)
let colorPal = ['#F2C14E', '#F78154', '#4D9078', '#B4436C', '#5FAD56', '#F2F2F2'];

// grid size
let cols = 6;
let rows = 4;

// arrays: one angle, one speed, one color for each square
let angles = [];
let speeds = [];
let colors = [];

let cellW, cellH;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  cellW = width / cols;
  cellH = height / rows;

  randomizeGrid();
}

function draw() {
  background(15);
  noFill();
  strokeWeight(4);

  let i = 0; // index into the arrays

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      // push saves the canvas, so each square starts fresh
      push();
      translate(col * cellW + cellW / 2, row * cellH + cellH / 2);
      rotate(angles[i]);

      // nested shrinking squares, like the Loop Review example
      let size = min(cellW, cellH) * 0.7;
      stroke(colors[i]);
      for (let n = 0; n < 4; n++) {
        rect(0, 0, size, size);
        rotate(15); // each inner square is turned a bit more
        size *= 0.7;
      }

      // pop puts the canvas back, so the next square isn't affected
      pop();

      angles[i] += speeds[i];
      i++;
    }
  }
}

// fills the arrays with new random values
function randomizeGrid() {
  angles = [];
  speeds = [];
  colors = [];
  for (let i = 0; i < cols * rows; i++) {
    angles.push(random(0, 360));
    speeds.push(random(-2, 2));
    colors.push(colorPal[floor(random(0, colorPal.length))]);
  }
}

function mousePressed() {
  randomizeGrid();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cellW = width / cols;
  cellH = height / rows;
}
