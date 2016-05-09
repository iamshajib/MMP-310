var pacman, ghost;
var pacman_walk_sprites, pacman_walk, pacman_stand_sprites, pacman_stand;
var obstacle;

function preload() {
    pacman_walk_sprites = loadSpriteSheet("image/pacman.png", 50, 50, 6);
    pacman_walk = loadAnimation(pacman_walk_sprites);
    //    pacman_stand_sprites = loadSpriteSheet("image/pacman.png", 50, 50, 1);
    //    pacman_stand = loadAnimation(pacman_stand_sprites);

}

function setup() {
    createCanvas(900, 500);


    pacman = createSprite(70, 40);
    pacman.addAnimation("walk", pacman_walk);
    //pacman.addAnimation("stand", pacman_stand);
    pacman.setCollider("circle", 0, 0, 32, 32);
    //player.debug = true;


    obstacle = createSprite(300, 200);
    obstacle.debug = true;
    obstacle.addImage(loadImage("image/circle.png"));
    obstacle.setCollider("circle", 0, 0, 18, 18);


    ghost = createSprite(100, 100);
    ghost.addImage(loadImage("image/ghost.png"));
}

function draw() {
    background("black");


    pacman.collide(obstacle, function() {
        obstacle.remove();
    });

    drawSprites();
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
