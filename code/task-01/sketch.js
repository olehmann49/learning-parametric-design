function preload(){
  // preload assets
}

function setup() {
  createCanvas(1600, 1600, 
    );
}
  // -----------------oben links---------------------------
  // Inspiration: Carmen Herrera
  function draw() {
  background(20);

// Großer Kreis Im Hintergrund
  
  strokeWeight(0)
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
  // ---------------------unten links--------------------------------
  // Inspiration: Noemi Escandell
  // Blaues Rechteck als Basis
  
  fill('red')
  rect(
    100,
    900, 
    300,
    600,
  );
  
  // Einkerbungen im Rechteck

  fill(20)
  circle(
    400,
    1000,
    200,
    strokeWeight(0)
  );
  
  fill(20)
  circle(
    400,
    1300,
    400,
    strokeWeight(0)
  );

  // Kreise gleicher größe daneben 

  fill('red')
  circle(
    600,
    1000,
    200,
    strokeWeight(0)
  );
  
  fill('red')
  circle(
    600,
    1300,
    400,
    strokeWeight(0)
  );

  // --------------------oben rechts-----------------------------
  // keine Inspiration
  // Mittlerer Kreis (Basis)

  fill('rgba(0, 0, 0, 1)');
  stroke(0);
  strokeWeight(0)
  circle(
    1200,
    400,
    400,
  );

  // roter  Kres

  fill('rgba(255, 0, 0, 0.4)');
  circle(
    1300,
    400,
    400,
  );

  // grüner Kreis

  fill('rgba(0, 255, 0, 0.4)');
  circle(
    1100,
    400,
    400,
  );

  // 2x blauer Kreis

  fill('rgba(0, 0, 255, 0.4)');
  circle(
    1200,
    300,
    400,
  );
  
  fill('rgba(0, 0, 255, 0.4)');
  circle(
    1200,
    500,
    400,
  );
  
  // ----------------------unten rechts-------------------------
  // keine Inspiration
  // Kombinatrion verschiedener Formen

  fill('rgba(255, 0, 0, 0)');
  strokeWeight(10)
  rect(
    1000,
    1000,
    400,
    400,
  )
  
  fill('black')
  rect(
    1300,
    1300,
    200,
    200,
  )
  
  arc( 
    1150, 
    1000,
    300, 
    300,
    0,
    180,
    PIE
  );
  
  arc( 
    1150, 
    1250,
    300, 
    300,
    90,
    180,
    PIE
  );

  circle(
    1400,
    1000,
    200,
  );

  circle(
    1300,
    1300,
    200,
  );
}