function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400,);
  background(255)
}
function draw() {
  fill('black')

  
  let x = 1;
  while (x < 20) {
    circle(20 * x, 20, 2 * x);              // obere Zeile, größer werdene Kreise 
    circle(20, 20 * x, 2 * x);              // linke Spalte, nach unten größerwerdene Kreise
    circle(400 - (20 * x), 380, 2 * x);     // unter Zeile, kleiner werdene Kreise
    circle(380, 400 - (20 * x), 2 * x);     // linke Spalte, nach unten kleiner werdene Kreise
    x += 1;
    
  }

    x = 0;                                  // Variablen deklarieren
    let y = 0;                              // Variablen deklarieren
    let FW = 0;                             // Variable "Farbwechsler" deklarieren für schachbrettmuster

    while (y < 4) {                         // begrenzt die Anzahl der Quadrate der Zeile
                                            
      if (y % 2) {                     // modulo sorgt dafür, dass die Farbreihenfolge wechselt

        FW = 1;                             // wenn y gerade: starte mit schwarzem Quadrat
      }else {

        FW = 0;                             // vice versa 
      }

      while (x < 4) {                       // Begrenzt die Anzahl der Quadrate pro Spalte

      if (FW == 0) {                        // Bestimmt die Färbung der Quadrate  in Abhängigkeit von FW

        fill ('white');                      
        FW = 1;
      }else {

        fill ('black');
        FW = 0;
      }
      square(40 + (80 * x) , 40 + (80 * y), 80);  // Erzeugung der Quadrate

      if (FW == 0) {                        // Bestimmt die Färbung der Kreise in Abhängigkeit von FW 

        fill ('white');                     
        
      }else {

        fill ('black');
        
      }
      circle(80 + (80 * x) , 80 + (80 * y), 80);
      x += 1;                               // geht zum nächsten Quadrat / Kreis
    }
    x = 0;                                  // Resettet Spalte        
    y += 1;                                 // geht eine Zeile nach unten
  }
}
