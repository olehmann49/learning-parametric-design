function preload() {
    // preload assets
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  let counter;

  function draw() {
    stroke(0);
    strokeWeight(10)
    fill(0);
    noFill();
    
    beginShape();
  
    vertex(0, 0);
    vertex(100, 0);
    
    for (let y = 1; y < 5; y += 1) {
      const x = noise(5);
      const cX = noise(5);
      let direct = 200;
      if (y%2===0) {
        direct = 1;
      }
  
      curveVertex(100 + cX * direct, 400 / 5 * y - (400 / 5 * 0.25), 200 + x * direct * -10, 400 / 4 * y)
    }
  
    vertex(0, 400);
    vertex(0, 400);
    11
    endShape(CLOSE);
    
    counter += 1;
  }