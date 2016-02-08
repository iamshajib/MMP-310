var img;

function preload() {
  img = loadImage("js/assets/tiger.jpg");
}

function setup(){
createCanvas(640, 480);

image(img, 10, 250, 100, 70);
image(img, 10, 350, 150, 80);
image(img, 170, 300, 80, 150);
image(img, 200, 190, 100, 100);
image(img, 130, 200, 50, 90);

textSize(42);
fill(0, 0, 225);
textFont("Georgia");
text("I am a text and my Color is Blue", 10, 60);

textSize(32);
fill(189,53,53);
textFont("Helvetica");
text("I am Red", 10, 100);

textSize(26);
fill(76,153,0);
text("I am Green", 10, 140);

textSize(17);
fill(255,255,0);
text("I am Yellow", 10, 180);

textSize(10);
fill(51,0,0);
text("I am Black", 10, 220);


}



