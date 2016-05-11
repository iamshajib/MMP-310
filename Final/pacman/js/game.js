var pacman, ghost, frame;
var pacman_walk_sprites, pacman_walk, pacman_stand_sprites, pacman_stand;
var obstacles;
var walls;
var dots = [];

function preload() {
    dataLoaded = false;

    pacman_walk_sprites = loadSpriteSheet("image/pacman.png", 50, 50, 6);
    pacman_walk = loadAnimation(pacman_walk_sprites);
}

function setup() {
    createCanvas(1200, 676);

    obstacles = new Group();

    //load json
    var url = "js/data/setup.json";
    loadJSON(url, jsonLoaded);
    console.log('setup complete');


    pacman = createSprite(370, 140);
    pacman.addAnimation("walk", pacman_walk);
    pacman.setCollider("circle", 0, 0, 32, 32);
    //player.debug = true;


    /*frame = createSprite(600, 500);
    frame.addImage(loadImage("image/frame.png"));
    obstacles.add(frame);
    frame.debug = true;*/

    frame = loadImage("image/frame.png");

    wall = createSprite(100,100,100, 40);
    //wall.visible = false;
    wall.setCollider("rectangle", 0, 0, 100, 40);
    wall.debug = true;
    obstacles.add(wall);

    ghost = createSprite(100, 100);
    ghost.addImage(loadImage("image/ghost.png"));
}
//end of setup

function pacmanCollide() {
    console.log('collide');
}


function draw() {
    background("black");
    image(frame, 0, 0);

    if (dataLoaded) {
        pacman.collide(obstacles, pacmanCollide); //console.log('obstacles',obstacles);
        obstacles.collide(pacman);
    }


   dots.forEach( function(dot) {
      pacman.overlap(dot, function() {
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
        pacman.setSpeed(2, 180);
        pacman.mirrorX(-1);
    } else if (keyCode === RIGHT_ARROW) {
        pacman.setSpeed(2, 0);
        pacman.mirrorX(1);
    } else if (keyCode === UP_ARROW) {
        pacman.setSpeed(2, 270);
    } else if (keyCode === DOWN_ARROW) {
        pacman.setSpeed(2, 90);
    }

}
