function preload(){
  // preload assets
}

function setup() {              
  createCanvas(400, 400);
}

let angle= 0; 

function draw() {
  translate(200, 200);        // Koordinatenmittelpunkt in die Mitte verschieben
  background(255);
  
  strokeWeight(10);           // "Rahmen"
  noFill();
  circle(0, 0, 310);
 
  rotate(Math.PI / 180 * angle);
  strokeWeight(0);
  fill(0);
  circle(0, 0, 50);

  beginShape();               
  vertex(0, 0);               // Flügel 1 
  vertex(-50, 150);
  vertex(50, 150);

  vertex(0, 0);               // Flügel 2
  vertex(-50, -150);
  vertex(50, -150);
  
  vertex(0, 0);               // Flügel 3
  vertex(150, -50);
  vertex(150, 50);

  vertex(0, 0);               // Flügel 4
  vertex(-150, 50);
  vertex(-150, -50);

  endShape(CLOSE);

  fill(255)                   //Mittelkreis in weiß
  circle(0, 0, 20);

  angle += 6;                 // drehschnelligkeit und -Richtung
}