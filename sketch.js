
let r, g, b;
let brain;

let best = "black";

function pickColor() {
  r = random(255);
  g = random(255);
  b = random(255);
  redraw();
}

function setup() {
  createCanvas(600, 300);
  noLoop();
  brain = new NeuralNetwork(3, 3, 2);

  for (let i = 0; i < 10000; i++) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let trgt = trainColor(r, g, b);
    let inp = [r / 255, g / 255, b / 255];
    brain.train(inp, trgt);
  }

  pickColor();

}

function mousePressed() {
  let trgt;
  if (mouseX > width / 2) {
    trgt = [0, 1];
  } else {
    trgt = [1, 0];
  }
  let inp = [r / 255, g / 255, b / 255];
  
  brain.train(inp, trgt);


  pickColor();
}


function colorPredictor(r, g, b) {
  console.log(floor(r + g + b));
  let inp = [r / 255, g / 255, b / 255];
  let outpt = brain.predict(inp);
  //console.log(outpt);

  if (outpt[0] > outpt[1]) {
    return "black";
  } else {
    return "white";
  }

}

function trainColor(r, g, b) {
  if (r + g + b > (255 * 3) / 2) {
    return [1, 0];
  } else {
    return [0, 1];
  }
}


function draw() {
  background(r, g, b);
  strokeWeight(4);
  stroke(0);
  line(width / 2, 0, width / 2, height);

  textSize(64);
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text("black", 150, 100);
  fill(255);
  text("white", 450, 100);

  let best = colorPredictor(r, g, b);
  if (best === "black") {
    fill(0);
    ellipse(150, 200, 60);
  } else {
    fill(255);
    ellipse(450, 200, 60);
  }


}