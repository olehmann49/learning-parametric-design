let rectColor;


function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  background(0)
  rectColor = random(0, 255);
  frameRate = 2;
}

function draw() {
  fill(rectColor);
  let x = 1;
  while(x < 19) {
    let y = 1;
    while(y < 19) {
      rect(20 * x, 20 * y, 20, 20);
      y += 2;
    }
    x += 2;
  }
}