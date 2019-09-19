// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

//The current positions of my rectangles

let x = 0;
let y = 324;

// The current position of text following the mouse
let textX;
let textY;
let textSize = 30;

// The current position of the circle
let circX;
let circY;
let circSize = 150;

// Insertion of a moving image
let imageX;
let imageY;
let imageNew;


// preload()
//
// Nothing here

function preload() {

  img = loadImage ('assets/PSY.jpg');

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;

// Start the new circle from the bottom CENTER
circX = 320;
circY = 640;

image(img,1,1);


  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();
}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(0,0,255,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);


  // Move the rectangles from center left to right
x = x+1;
// Colour
fill(0);
// Draw the rectangles
rect (x,y,1,1);
fill(0);
rect (x,y-2,1,1);
fill(0);
rect (x,y-4,1,1);
fill(0);
rect (x,y-6,1,1);
fill(0);
rect (x,y-8,1,1);
fill(0);

// Move the text according to mouse
textX = mouseX;
textY = mouseY;
// Select size for the text
textSize = 30;
//Display the text
text('Chronicles',textX, textY);
// Colour
fill(126);

// Move New circle from bottom to top
circY -=1
//Colour
fill (126,126,126);
// Draw new circle
ellipse(circX,circY,circleSize,circleSize);

}
