function setup() {
   createCanvas(windowWidth, windowHeight);
   angleMode(DEGREES);
}

function draw() {
   background(0);
   var x= windowWidth/2;
   var y= windowHeight/2;
   stroke(255, 204, 0);
   strokeWeight(4);
   noFill();
   ellipse(x, y,200,200);
   translate(x, y);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(8);
   stroke(255, 100, 150);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);

   stroke(150, 100, 255);
   let minuteAngle = map(mn, 0, 60, 0, 360);

   stroke(150, 255, 100);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);

   push();
   rotate(secondAngle);
   stroke(255, 100, 150);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(150, 100, 255);
   line(0, 0, 75, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 50, 0);
   pop();

   stroke(255);
   point(0, 0);
}