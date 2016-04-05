//mmp-310
var car, obstacles, parking, policeCar, stop, plogo, ghost;
var direction = 90;
var pl1, pl2, pl3, pl4, pl5, pl6, pl7;


var myRec = new p5.SpeechRec();
myRec.continuous = true;
myRec.interimResults = true;


// function preload() {
// 	parking = loadAnimation("image/parking.png");
// 	//obstacles.add(parking);
// }


function setup() {
    createCanvas(1200, 700);

    obstacles = new Group();


    //loading random multiple wall img

    wall = createSprite(180, 150);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(300, 530);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(80, 600);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(500, 330);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(700, 600);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(700, 100);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);

    wall = createSprite(900, 400);
    wall.addImage(loadImage("image/wall.png"));
    obstacles.add(wall);


    //*****************STOP*************
    stop = createSprite(20, 350);
    stop.addImage(loadImage("image/stop.png"));
    obstacles.add(stop);

    stop = createSprite(330, 20);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(870, 20);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(370, 658);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);

    stop = createSprite(870, 658);
    stop.addImage(loadImage("image/stop2.png"));
    obstacles.add(stop);



    //******************LOAD PARKING************************

    parking = createSprite(1200, 330);
    parking.addImage(loadImage("image/wallB.png"));
    obstacles.add(parking);

    pl1 = createSprite(1130, 63);
    pl1.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl1);

    pl2 = createSprite(1130, 150);
    pl2.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl2);

    pl3 = createSprite(1130, 238);
    pl3.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl3);

    pl4 = createSprite(1130, 326);
    pl4.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl4);

    pl5 = createSprite(1130, 414);
    pl5.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl5);

    pl6 = createSprite(1130, 504);
    pl6.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl6);

    pl7 = createSprite(1130, 598);
    pl7.addImage(loadImage("image/wallP.png"));
    obstacles.add(pl7);



    plogo = createSprite(1125, 105);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 198);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 280);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 370);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 455);
    plogo.addImage(loadImage("image/plogo.png"));
    plogo = createSprite(1125, 550);
    plogo.addImage(loadImage("image/plogo.png"));


    //**************************************************
    //test = createSprite(200, 200);


    //load car img
    car = createSprite(100, 300);
    car.addImage(loadImage("image/car01.png"));

    //***load polica car***
    // for(var i=0; i<4; i++)
    // {
    policeCar = createSprite(600, 300, 50, 100);
    policeCar.addAnimation("image/police-car.png", "image/police-car.png");
    //policeCar.addAnimation("round","image/car01.png","image/car01.png");
    // }



    textSize(20);
    textAlign(LEFT);
    text("draw: up, down, back, go, stop", 20, 20);

    myRec.onResult = parseResult;
    myRec.start();

}



function draw() {
    background(255, 255, 255);

    //animation(ghost, 100, 250);

    //***trying to add multiple walls for parking***
    //animation(parking, 300, 150);


    //***wall obstacle***
    car.collide(obstacles);

    //***police car movement***
    direction += 1;
    policeCar.setSpeed(6, direction);




    //      if(car.overlap(policeCar)){
    //        animation(test, 300, 150);
    //      }else{
    //        animation(test, 300, 350);
    //      }

    //    if(policeCar.overlap(car){
    //    car.visible = false;}
    //  else{
    //    car.visible = true;}


    drawSprites();
} //***end of draw***


//function mousePressed() {
//
//  //create a sprite
//  var splat = createSprite(mouseX, mouseY);
//  splat.addAnimation("normal", "image/wall.png", "image/wall.png");
//
//  //set a self destruction timer (life)
//  //splat.life = 40;
//}


function parseResult() {
    // recognition system will often append words into phrases.
    // so hack here is to only use the last word:
    var mostrecentword = myRec.resultString.split(' ').pop();
    if (mostrecentword.indexOf("back") !== -1) {
        move('back');
    } else if (mostrecentword.indexOf("go") !== -1) {
        move('go');
    } else if (mostrecentword.indexOf("up") !== -1) {
        move('up');
    } else if (mostrecentword.indexOf("down") !== -1) {
        move('down');
    } else if (mostrecentword.indexOf("stop") !== -1) {
        move('stop');
    }
    console.log(mostrecentword);
}


function move(direction) {

    if (direction == "back") {
        car.setSpeed(2, 180);
    } else if (direction == "go") {
        car.setSpeed(2, 0);
    } else if (direction == "up") {
        car.setSpeed(2, 270);
    } else if (direction == "down") {
        car.setSpeed(2, 90);
    } else if (direction == "stop") {
        car.setSpeed(0, 0);
    }
}




//raf things
