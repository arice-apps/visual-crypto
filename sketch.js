/*
 * @name Alpha Mask
 * @description Loads a "mask" for an image to specify the transparency in
 * different parts of the image. The two images are blended together using
 * the mask() method of p5.Image.
 * <p><em><span class="small"> To run this example locally, you will need two
 * image files, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 */
var crypt_bg_layer;
var key_crypt;
var key_layer_crypt;

function preload() {
  crypt_bg_layer = loadImage("assets/bg-cipher.png");
  key_crypt = loadImage("assets/key.png");
}

function setup() {
  createCanvas(1020, 1320);
  imageMode(CENTER);
}

function draw() {
  background(0, 0, 0);
  image(crypt_bg_layer, width/2, height/2);
  image(key_crypt, mouseX, mouseY);
}


