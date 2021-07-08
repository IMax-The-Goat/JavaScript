const height = 27;
const length = 45;

var board = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var moveQueue = [];
var snakeLength = 1;
var spawnY;
var spawnX;
var snakeHeadY;
var snakeHeadX;
var direction;
var numOfApples = 5;

// document.getElementById("losemenu").hidden;

// document.getElementById("startButton")
//         .addEventListener("click", function() {
//     document.getElementById("menu").hidden = true;
//     document.getElementById("grid-container").hidden = false;
// }, false);

document.addEventListener('keydown', async function(e) {
    if (!(e.keyCode >= 37 && e.keyCode <= 40)) { return; }

    switch (e.keyCode){
        case 37:
            if (direction != "right"){
                console.log('left');
                direction = "left";
            }
            break;
        case 38:
            if (direction != "down"){
                console.log('up');
                direction = "up";
            }
            break;
        case 39:
            if (direction != "left"){
                console.log('right');
                direction = "right";
            }
            break;
        case 40:
            if (direction != "up"){
                console.log('down');
                direction = "down";
            }
            break;
    }

    if (direction != moveQueue[0]) {
        moveQueue.push(direction);
        // console.log(moveQueue);
    }

    while (moveQueue.length > 1){
        moveQueue.shift();
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(){
    for (var i = 0; i < length; i++){
        for (var j = 0; j < height; j++){
            // console.log("board." + i + "." + j + " is: " board[j][i]);
            if (board[j][i] == "snakeHead" || board[j][i] == "snakeBody"){
                document.getElementById("board." + i + "." + j).style.backgroundColor = "yellow";
            }
            else if (board[j][i] == "apple"){
                document.getElementById("board." + i + "." + j).style.backgroundColor = "red";
            }
            else if (board[j][i] == "grass"){
                document.getElementById("board." + i + "." + j).style.backgroundColor = "green";
            }
        }
    }

    calculateScore(snakeLength);
}

function play() {
    startGame();
}

async function startGame(){
    moveQueue = []

    for (var i = 0; i < length; i++){
        for (var j = 0; j < height; j++){
            board[j][i] = "grass";
        }
    }
    
    spawnX = Math.floor(Math.random() * length);
    spawnY = Math.floor(Math.random() * height);

    board[spawnY][spawnX] = "snakeHead";
    snakeHeadY = spawnY;
    snakeHeadX = spawnX;

    spawnApple();

    draw();

    for (var i = 0; i < 10000; i++){
        if (gameOver() == false){
            if (moveQueue[0] == "right"){ 
                board[snakeHeadY][snakeHeadX] = "grass";
                snakeHeadX++; 
            }
            else if (moveQueue[0] == "left"){ 
                board[snakeHeadY][snakeHeadX] = "grass";
                snakeHeadX--; 
            }
            else if (moveQueue[0] == "up"){ 
                board[snakeHeadY][snakeHeadX] = "grass";
                snakeHeadY--; 
            }
            else if (moveQueue[0] == "down"){
                board[snakeHeadY][snakeHeadX] = "grass";
                snakeHeadY++; 
            }

            gameOver();

            if (board[snakeHeadY][snakeHeadX] == "apple"){
                snakeLength++;
                spawnApple();
            }

            board[snakeHeadY][snakeHeadX] = "snakeHead";

            draw();
            gameOver();

            // console.log(gameOver());

            await sleep(100);
        }
        else {
            console.log("end");
            document.getElementById("losemenu").hidden = false;
            break;
        }
    }
}

function gameOver(){
    if (snakeHeadY < 0 || snakeHeadY > height){
        return true;
    }
    else if (snakeHeadX < 0 || snakeHeadX > length){
        return true;
    }
    else if (board[snakeHeadY][snakeHeadX] == "snakeBody"){
        return true;
    }
    else {
        return false;
    }
}

function spawnApple(){
    spawnX = Math.floor(Math.random() * length);
    spawnY = Math.floor(Math.random() * height);

    board[spawnY][spawnX] = "apple";
}

function calculateScore(snakeLength){
    document.getElementById("scoreOutput").textContent = ("Score: " + snakeLength);
    // return snakeLength;
}


