

let eyeSpacing = 15;
let lookAmountX;
let lookAmountY;
let img;
function preload() {
  img = loadImage('P5_Charlie.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
background(255,97,30);
  image(img,100,50,250,350)
  
  ellipse(198 - eyeSpacing + lookAmountX,lookAmountY+ 95,10,8);
  ellipse(200 + eyeSpacing + lookAmountX,lookAmountY+105,10,8);
  fill(0)

  lookAmountX = map(mouseX, 0, 500, -25, 25, 1);
  lookAmountY = map(mouseY, 0, 500, -10, 15, 1);
  
}
