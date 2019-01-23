let r, g, b;


function pickColour() {
    r = random(255);
    g = random(255);
    b = random(255);
}

function setup() {
    createCanvas(640, 360);
    pickColour();


}

function mousePressed() {
    pickColour();
}

function draw() {
    background(r, g, b);

    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text("black", 200, 150);
    fill(255);
    text("white", 400, 150);
}