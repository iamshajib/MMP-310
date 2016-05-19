var pacman, frame, line, line2, box, smbox, lose = false;
var pacman_walk_sprites, pacman_walk, pacman_stand_sprites, pacman_stand;
var obstacles;
var walls;
var ghosts;
var dataLoaded = false;
var dots = [];
 var directions = [
    90, 180, 270, 360
 ];

function preload() {


    pacman_walk_sprites = loadSpriteSheet("image/pacman.png", 30, 30, 6);
    pacman_walk = loadAnimation(pacman_walk_sprites);
}

function setup() {
    createCanvas(1200, 676);

    obstacles = new Group();

    //load json
    var url = "js/data/setup.json";
    loadJSON(url, jsonLoaded);
    console.log('setup complete');


    pacman = createSprite(870, 180);
    pacman.addAnimation("walk", pacman_walk);
    pacman.setCollider("circle", 0, 0, 20, 20);
    pacman.debug = true;


    frame = loadImage("image/frame.png");

    box = createSprite(595, 340);
    box.addImage(loadImage("image/box.png"));

    wall = createSprite(510, 340, 5, 80);
    wall.setCollider("rectangle", 0, 0, 5, 80);
    wall.visible = false;
    obstacles.add(wall);

    wall = createSprite(680, 340, 5, 80);
    wall.setCollider("rectangle", 0, 0, 5, 80);
    wall.visible = false;
    obstacles.add(wall);

    wall = createSprite(655, 299, 50, 5);
    wall.setCollider("rectangle", 0, 0, 50, 5);
    wall.visible = false;
    obstacles.add(wall)

    wall = createSprite(655, 382, 50, 5);
    wall.setCollider("rectangle", 0, 0, 50, 5);
    wall.visible = false;
    obstacles.add(wall)

    wall = createSprite(540, 297, 50, 5);
    wall.setCollider("rectangle", 0, 0, 50, 5);
    wall.visible = false;
    obstacles.add(wall)

    wall = createSprite(540, 384, 50, 5);
    wall.setCollider("rectangle", 0, 0, 50, 5);
    wall.visible = false;
    obstacles.add(wall)



    wall = createSprite(270, 60, 300, 10);
    wall.setCollider("rectangle", 0, 0, 300, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(930, 60, 300, 10);
    wall.setCollider("rectangle", 0, 0, 300, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(270, 620, 300, 10);
    wall.setCollider("rectangle", 0, 0, 300, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(930, 620, 300, 10);
    wall.setCollider("rectangle", 0, 0, 300, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(599, 140, 280, 10);
    wall.setCollider("rectangle", 0, 0, 280, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);


    wall = createSprite(599, 540, 280, 10);
    wall.setCollider("rectangle", 0, 0, 280, 10);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(25, 460, 10, 130);
    wall.setCollider("rectangle", 0, 0, 10, 130);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(25, 215, 10, 130);
    wall.setCollider("rectangle", 0, 0, 10, 130);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(1168, 215, 10, 130);
    wall.setCollider("rectangle", 0, 0, 10, 130);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(1168, 465, 10, 130);
    wall.setCollider("rectangle", 0, 0, 10, 130);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);


    wall = createSprite(268, 575, 30, 80);
    wall.setCollider("rectangle", 0, 0, 30, 80);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(268, 105, 30, 80);
    wall.setCollider("rectangle", 0, 0, 30, 80);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(432, 570, 28, 70);
    wall.setCollider("rectangle", 0, 0, 28, 70);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(432, 110, 28, 70);
    wall.setCollider("rectangle", 0, 0, 28, 70);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(760, 105, 30, 80);
    wall.setCollider("rectangle", 0, 0, 30, 80);
    wall.visible = false;
    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(760, 575, 30, 80);
    wall.setCollider("rectangle", 0, 0, 30, 80);
    wall.visible = false;
    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(927, 570, 28, 70);
    wall.setCollider("rectangle", 0, 0, 28, 70);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(927, 110, 28, 70);
    wall.setCollider("rectangle", 0, 0, 28, 70);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(1121, 340, 80, 110);
    wall.setCollider("rectangle", 0, 0, 80, 110);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(75, 340, 80, 110);
    wall.setCollider("rectangle", 0, 0, 80, 110);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(75, 105, 80, 85);
    wall.setCollider("rectangle", 0, 0, 80, 85);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);


    wall = createSprite(74, 578, 80, 85);
    wall.setCollider("rectangle", 0, 0, 80, 85);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(1120, 104, 80, 85);
    wall.setCollider("rectangle", 0, 0, 80, 85);
    wall.visible = false;
    //    wall.debug = true;
    obstacles.add(wall);

    wall = createSprite(1122, 578, 80, 85);
    wall.setCollider("rectangle", 0, 0, 80, 85);
    wall.visible = false;
    wall.debug = true;
    obstacles.add(wall);






    line = createSprite(1010, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(925, 262);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(925, 423);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;


    line = createSprite(840, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(756, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;



    line = createSprite(180, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(265, 262);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;
    line = createSprite(265, 423);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(350, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;

    line = createSprite(434, 340);
    line.addImage(loadImage("image/line.png"));
    obstacles.add(line);
    //    line.debug = true;




    line2 = createSprite(652, 460);
    line2.addImage(loadImage("image/line2.png"));
    obstacles.add(line2);

    line2 = createSprite(535, 460);
    line2.addImage(loadImage("image/line2.png"));
    obstacles.add(line2);

    line2 = createSprite(652, 222);
    line2.addImage(loadImage("image/line2.png"));
    obstacles.add(line2);

    line2 = createSprite(535, 223);
    line2.addImage(loadImage("image/line2.png"));
    obstacles.add(line2);



    smbox = createSprite(175, 465);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);

    smbox = createSprite(175, 215);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);

    smbox = createSprite(430, 222);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);

    smbox = createSprite(430, 460);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);


    smbox = createSprite(755, 222);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);

    smbox = createSprite(755, 460);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);

    smbox = createSprite(1012, 222);
    smbox.addImage(loadImage("image/smbox.png"));
    obstacles.add(smbox);
//    smbox.debug = true;

    smbox = createSprite(1012, 460);
    smbox.addImage(loadImage("image/smbox.png"));
//    smbox.debug = true;
    obstacles.add(smbox);


    ghosts=[
        new ghost(550, 350, "image/ghost.png"),
        new ghost(550, 350, "image/ghost.png"),
        new ghost(550, 350, "image/ghost.png")
    ];
}
//end of setup

function pacmanCollide() {
    console.log('collide');
}


function ghost(x, y, img) {
    this.s = createSprite(x, y);
    this.s.addAnimation("still", img);
    this.s.setSpeed(5, 90);
    this.s.setCollider("circle", 0, 0, 20, 20);
    this.speed = random(5, 10);
    /* this.s.debug = true;*/
}


function draw() {
    background("black");
    image(frame, 0, 0);

    if (dataLoaded) {
        pacman.collide(obstacles, pacmanCollide); //console.log('obstacles',obstacles);
        obstacles.collide(pacman);
    }


    if (!lose) {
        for (var i = 0; i < ghosts.length; i++) {
            ghosts[i].s.collide(obstacles, function () {
                ghosts[i].s.setSpeed(ghosts[i].speed, directions[floor(random(0, directions.length))]);
            });

            ghosts[i].s.collide(pacman, function () {
//              lose = true;
            });
        }

    } else {
        fill("white");
        text("you lost", 100, 100);
    }


    dots.forEach(function (dot) {
        pacman.overlap(dot, function () {
            dot.remove();
        });
    });

    drawSprites();
}
//en of draw



function jsonLoaded(jsonData) {
    console.log('json loaded', jsonData);
    data = jsonData;
    showImages();
}

function showImages() {
    console.log('showimages');

    for (var i = 0; i < data.dotLocations.length; i++) {
        var dot = createSprite(data.dotLocations[i][0], data.dotLocations[i][1]);
        dot.addImage(loadImage("image/" + data.dotImage));
        /*obstacles.add(dot);*/
        dots.push(dot);

    }
    dataLoaded = true;
}




function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        pacman.setSpeed(4, 180);
        pacman.mirrorX(-1);
    } else if (keyCode === RIGHT_ARROW) {
        pacman.setSpeed(4, 0);
        pacman.mirrorX(1);
    } else if (keyCode === UP_ARROW) {
        pacman.setSpeed(4, 270);
    } else if (keyCode === DOWN_ARROW) {
        pacman.setSpeed(4, 90);
    }

}
