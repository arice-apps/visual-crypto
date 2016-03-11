var crypt_bg_layer;
var key_crypt;
var key_layer_crypt;

function preload() {
  bg_layer = loadImage("assets/bg.png");
  page_cursor = loadImage("assets/cursor.png");
}

function setup() {
  createCanvas(1020, 1320);
  imageMode(CENTER);
}

function draw() {
  background(0, 0, 0);
  image(bg_layer, width/2, height/2);
  image(page_cursor, mouseX, mouseY);
}


