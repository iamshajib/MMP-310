var player;
var speed = 0.1;

function setup(){
    createCanvas(720, 300);
    player = createSprite(100, 100, 40, 40);
}

function draw(){
    background("black");

    if ( keyDown( "a") ){
        player.velocity.x -= speed;
    }
    else if ( keyDown( "d" ) ){
        player.velocity.x += speed;
    }


    drawSprites();
}
