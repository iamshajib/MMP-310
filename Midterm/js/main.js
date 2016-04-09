var man, obstacles, dog, stop, food;
var direction = 90;


function setup() {
    createCanvas(1400, 700);

    obstacles = new Group();

    wall = createSprite(300, 330);
    wall.addImage(loadImage("image/wall1.png"));
    obstacles.add(wall);

    wall = createSprite(100, 210);
    wall.addImage(loadImage("image/wall2.png"));
    obstacles.add(wall);

    wall = createSprite(200, 370);
    wall.addImage(loadImage("image/wall3.png"));
    obstacles.add(wall);

    wall = createSprite(60, 550);
    wall.addImage(loadImage("image/wall4.png"));
    obstacles.add(wall);

    wall = createSprite(150, 600);
    wall.addImage(loadImage("image/wall5.png"));
    obstacles.add(wall);

    wall = createSprite(250, 122);
    wall.addImage(loadImage("image/wall6.png"));
    obstacles.add(wall);

    wall = createSprite(450, 250);
    wall.addImage(loadImage("image/wall7.png"));
    obstacles.add(wall);

    wall = createSprite(250, 520);
    wall.addImage(loadImage("image/wall8.png"));
    obstacles.add(wall);

    wall = createSprite(440, 458);
    wall.addImage(loadImage("image/wall9.png"));
    obstacles.add(wall);

    wall = createSprite(400, 600);
    wall.addImage(loadImage("image/wall10.png"));
    obstacles.add(wall);

    wall = createSprite(650, 390);
    wall.addImage(loadImage("image/wall11.png"));
    obstacles.add(wall);

    wall = createSprite(580, 300);
    wall.addImage(loadImage("image/wall12.png"));
    obstacles.add(wall);

    wall = createSprite(850, 100);
    wall.addImage(loadImage("image/wall13.png"));
    obstacles.add(wall);

    wall = createSprite(785, 213);
    wall.addImage(loadImage("image/wall14.png"));
    obstacles.add(wall);

    wall = createSprite(739, 300);
    wall.addImage(loadImage("image/wall15.png"));
    obstacles.add(wall);

    wall = createSprite(838, 390);
    wall.addImage(loadImage("image/wall16.png"));
    obstacles.add(wall);

    wall = createSprite(938, 480);
    wall.addImage(loadImage("image/wall17.png"));
    obstacles.add(wall);

    wall = createSprite(787, 500);
    wall.addImage(loadImage("image/wall18.png"));
    obstacles.add(wall);

    wall = createSprite(850, 580);
    wall.addImage(loadImage("image/wall19.png"));
    obstacles.add(wall);

    wall = createSprite(1090, 480);
    wall.addImage(loadImage("image/wall20.png"));
    obstacles.add(wall);

    wall = createSprite(1150, 390);
    wall.addImage(loadImage("image/wall21.png"));
    obstacles.add(wall);

    wall = createSprite(980, 300);
    wall.addImage(loadImage("image/wall22.png"));
    obstacles.add(wall);

    wall = createSprite(950, 160);
    wall.addImage(loadImage("image/wall23.png"));
    obstacles.add(wall);

    wall = createSprite(850, 580);
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


    food = createSprite(1290, 350);
    food.addImage(loadImage("image/food.png"));
    obstacles.add(wall);



    //load man img
    man = createSprite(100, 300);
    man.addImage(loadImage("image/man.png"));


    dog = createSprite(600, 300, 50, 100);
    dog.addAnimation("image/dog.png", "image/dog.png");

}



function draw() {
    background(255, 255, 255);


    //***wall obstacle***
    man.collide(obstacles);

    //***pdog movement***
    direction += 1;
    dog.setSpeed(6, direction);

    if (dog.overlap(man)) {
        man.setSpeed(0, 0);
        dog.setSpeed(0, 0);
    }

    drawSprites();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        man.setSpeed(2, 180);
    } else if (keyCode === RIGHT_ARROW) {
        man.setSpeed(2, 0);
    } else if (keyCode === UP_ARROW) {
        man.setSpeed(2, 270);
    } else if (keyCode === DOWN_ARROW) {
        man.setSpeed(2, 90);
    }

}
