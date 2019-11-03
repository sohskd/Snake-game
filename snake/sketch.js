var s;
var scl = 20;
var food;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  text('yo', 10, 30);
}

function pickLocation() {
  console.log('width: ' + width);
  console.log('height: ' + height);
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  console.log('cols: ' + cols + 'rows: ' + rows);
  foodX = floor(random(cols));
  foodY = floor(random(rows));
  console.log('foodX: ' + foodX + ', foodY: ' + foodY);
  food = createVector(foodX, foodY);
  console.log('food loc: ' + food);
  food.mult(scl);
  // console.log('food loc after multi by scl: ' + food);
}

function mousePressed() {
  s.total++;
}

function draw() {
  // put drawing code here
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }

  s.death();
  s.update();
  s.show();

  fill('red')
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}