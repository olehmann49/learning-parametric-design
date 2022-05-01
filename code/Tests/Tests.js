
function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

const radius = 100;
let a = 1;

function draw() {
  background(255);
  // initial translate
  translate(200, 200);


  for (let angle = 0; angle < 360; angle += 180) {
    push();
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    
    translate(x, y);
    fill(0);
    rect(0, 0, 100, 20);
  
    pop();
  }

  noLoop(); 

  a += 1;
}