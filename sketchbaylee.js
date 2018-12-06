//draw a spinning box with width, height and depth 200
function setup() {
 var canvas= createCanvas(500, 500,WEBGL);
 canvas.parent('sketch-holder');
}

function draw() {
background(230,145,135);
stroke(0)
ellipse(0,0,455,455);
ellipse(0,0,400,400);
ellipse(0,0,345,345);
rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
fill(0)
stroke(200)
textSize(30);
fill(0,20);
textSize(32); 
text('word', 10, 30); 
fill(0, 102, 153); 
text('word', 10, 60); 
fill(0, 102, 153, 51); 
text('word', 10, 90);
}

