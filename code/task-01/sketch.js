function preload(){
  // preload assets
}

function setup() {
  createCanvas(800, 1600, 
    );
}

function draw() {
  // Großer Kreis Im Hintergrund
  background(20);

  fill('red')
  circle(400, 400, 600);
  // 2x 90° Winkel in Schwarz
  angleMode(DEGREES);

  fill('black');
  arc( 
    400, 400,
    600, 600,
    90,
    180,
    PIE
  );

  fill('black');
  arc( 
    400, 400,
    600, 600,
    270,
    0,
    PIE
  );

  // 4x kleiner Halbkreis darüber
  arc( 
    550, 400,
    300, 300,
    0,
    180,
    PIE
  );

  fill('red');
  arc( 
    550, 400,
    300, 300,
    180,
    0,
    PIE
  );
  fill('red')
   arc( 
    250, 400,
    300, 300,
    0,
    180,
    PIE
  );
  
  fill('black');
  arc( 
    250, 400,
    300, 300,
    180,
    0,
    PIE
  );
  // ------------------------------------------------------------------

  












}


