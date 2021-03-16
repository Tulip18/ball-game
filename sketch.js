var ball;
var database;
var player;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database.ref("ball/position") .on("value", readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(a,b){
    database.ref("ball/position").update({
        'x':player.x + a, 
        'y':player.y + b
    })
}
function readposition (data){
    player = data.val()
    ball.x=player.x
    ball.y=player.y
}