const length = 19;
const height = 22;

var pacmanX;
var pacmanY;
var pacmanMouth = "Pacman-Open-Right";
var dotsEaten = 0;

var redGhostEyes = "Red-Up";
var orangeGhostEyes = "Orange-Up";
var cyanGhostEyes = "Blue-Up";
var pinkGhostEyes = "Pink-Up";

board =           [ [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ];
backgroundBoard = [ [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ];

var direction;

function boardOne(){
    pacmanX = 9;
    pacmanY = 12;

    for (var i = 0; i < length; i++){
        for (var j = 0; j < height; j++){
            backgroundBoard[j][i] = "dot";
        }
    }    

    for (var i = 0; i < length; i++){
        for (var j = 0; j < height; j++){
            board[j][i] = "dot";
        }
    }

    // outside barrier
    for (var i = 0; i < length; i++) {
        board[0][i] = "barrier.left-right";
        board[height-1][i] = "barrier.left-right";
    }
    for (var i = 0; i < height; i++) {
        board[i][0] = "barrier.top-bottom";
        board[i][length-1] = "barrier.top-bottom";
    }
    // corners
    board[0][0] = "barrier.bottom-right";
    board[0][length-1] = "barrier.bottom-left";
    board[height-1][0] = "barrier.top-right";
    board[height-1][length-1] = "barrier.top-left";

    // left ghost spawn box 
    for (var i = 8; i < 11; i++) {
        board[11][i] = "barrier.left-right";
    }
    board[10][7] = "barrier.top-bottom";
    board[10][11] = "barrier.top-bottom";  
    board[9][8] = "barrier.left-end";
    board[9][10] = "barrier.right-end";
    board[9][7] = "barrier.bottom-right";
    board[9][11] = "barrier.bottom-left";
    board[11][7] = "barrier.top-right";
    board[11][11] = "barrier.top-left";
    board[9][9] = "ghost-gate";

    // obstacles
    for (var i = 1; i < 7; i++){
        board[i][18] = "barrier.top-bottom";
        board[i+14][18] = "barrier.top-bottom";
    }
    board[14][18] = "barrier.top-bottom";
    board[7][18] = "barrier.top-left-bottom";
    board[13][18] = "barrier.top-left-bottom";
    for (var i = 16; i < 18; i++){
        board[7][i] = "barrier.left-right";
        board[9][i] = "barrier.left-right";
        board[11][i] = "barrier.left-right";
        board[13][i] = "barrier.left-right";
    }
    board[8][18] = "barrier.top-bottom";
    board[12][18] = "barrier.top-bottom";
    board[8][15] = "barrier.top-bottom";
    board[12][15] = "barrier.top-bottom";
    board[7][15] = "barrier.bottom-right";
    board[11][15] = "barrier.bottom-right";
    board[11][18] = "barrier.bottom-left";
    board[9][15] = "barrier.top-right";
    board[13][15] = "barrier.top-right";
    board[9][18] = "barrier.top-left";

    for (var i = 1; i < 3; i++){
        board[7][i] = "barrier.left-right";
        board[9][i] = "barrier.left-right";
        board[11][i] = "barrier.left-right";
        board[13][i] = "barrier.left-right";
    }
    
    board[8][3] = "barrier.top-bottom";
    board[12][3] = "barrier.top-bottom";

    board[7][3] = "barrier.bottom-left";
    board[11][3] = "barrier.bottom-left";
    board[9][3] = "barrier.top-left";
    board[13][3] = "barrier.top-left";

    board[17][1] = "barrier.left-end";
    board[17][17] = "barrier.right-end";

    board[7][0] = "barrier.top-right-bottom";
    board[9][0] = "barrier.top-right";
    board[11][0] = "barrier.bottom-right";
    board[13][0] = "barrier.top-right-bottom";
    board[17][0] = "barrier.top-right-bottom";
    board[17][18] = "barrier.top-left-bottom";

    // Left side "T" shaped things
    board[0][8] = "barrier.left-right";
    board[0][9] = "barrier.left-bottom-right";
    board[0][10] = "barrier.left-right";
    board[1][9] = "barrier.top-bottom";
    board[2][9] = "barrier.top-bottom";
    board[3][9] = "barrier.top-end";

    board[5][7] = "barrier.right-end";
    board[5][8] = "barrier.left-right";
    board[5][9] = "barrier.left-bottom-right";
    board[5][10] = "barrier.left-right";
    board[5][11] = "barrier.left-end";
    board[6][9] = "barrier.top-bottom";
    board[7][9] = "barrier.top-end";
    
    board[13][7] = "barrier.right-end";
    board[13][8] = "barrier.left-right";
    board[13][9] = "barrier.left-bottom-right";
    board[13][10] = "barrier.left-right";
    board[13][11] = "barrier.left-end";
    board[14][9] = "barrier.top-bottom";
    board[15][9] = "barrier.top-end";

    board[17][7] = "barrier.right-end";
    board[17][8] = "barrier.left-right";
    board[17][9] = "barrier.left-bottom-right";
    board[17][10] = "barrier.left-right";
    board[17][11] = "barrier.left-end";
    board[18][9] = "barrier.top-bottom";
    board[19][9] = "barrier.top-end";


    // left side rectangles
    board[2][2] = "barrier.bottom-right";
    board[2][3] = "barrier.bottom-left";
    board[3][3] = "barrier.top-left";
    board[3][2] = "barrier.top-right";

    board[2][5] = "barrier.bottom-right";
    board[2][6] = "barrier.left-right";
    board[2][7] = "barrier.bottom-left";
    board[3][7] = "barrier.top-left";
    board[3][6] = "barrier.left-right";
    board[3][5] = "barrier.top-right";

    board[2][15] = "barrier.bottom-right";
    board[2][16] = "barrier.bottom-left";
    board[3][16] = "barrier.top-left";
    board[3][15] = "barrier.top-right";

    board[2][11] = "barrier.bottom-right";
    board[2][12] = "barrier.left-right";
    board[2][13] = "barrier.bottom-left";
    board[3][13] = "barrier.top-left";
    board[3][12] = "barrier.left-right";
    board[3][11] = "barrier.top-right";

    // left horizontal barriers
    board[5][2] = "barrier.right-end";
    board[5][3] = "barrier.left-end";

    board[5][15] = "barrier.right-end";
    board[5][16] = "barrier.left-end";

    board[15][5] = "barrier.right-end";
    board[15][6] = "barrier.left-right";
    board[15][7] = "barrier.left-end";

    board[15][11] = "barrier.right-end";
    board[15][12] = "barrier.left-right";
    board[15][13] = "barrier.left-end";


    // left vertical barriers
    board[11][5] = "barrier.bottom-end";
    board[12][5] = "barrier.top-bottom";
    board[13][5] = "barrier.top-end";

    board[11][13] = "barrier.bottom-end";
    board[12][13] = "barrier.top-bottom";
    board[13][13] = "barrier.top-end";


    // left sideways "T"s
    board[5][5] = "barrier.bottom-end";
    board[6][5] = "barrier.top-bottom";
    board[7][5] = "barrier.top-right-bottom";
    board[8][5] = "barrier.top-bottom";
    board[9][5] = "barrier.top-end";
    board[7][6] = "barrier.left-right";
    board[7][7] = "barrier.left-end";

    board[5][13] = "barrier.bottom-end";
    board[6][13] = "barrier.top-bottom";
    board[7][13] = "barrier.top-left-bottom";
    board[8][13] = "barrier.top-bottom";
    board[9][13] = "barrier.top-end";
    board[7][12] = "barrier.left-right";
    board[7][11] = "barrier.right-end";

    // right sideways "T"s


    // left upside down "T"s
    board[19][2] = "barrier.right-end";
    board[19][3] = "barrier.left-right";
    board[19][4] = "barrier.left-right";
    board[19][5] = "barrier.left-top-right";
    board[19][6] = "barrier.left-right";
    board[19][7] = "barrier.left-end";
    board[18][5] = "barrier.top-bottom";
    board[17][5] = "barrier.bottom-end";

    board[19][11] = "barrier.right-end";
    board[19][12] = "barrier.left-right";
    board[19][13] = "barrier.left-top-right";
    board[19][14] = "barrier.left-right";
    board[19][15] = "barrier.left-right";
    board[19][16] = "barrier.left-end";
    board[18][13] = "barrier.top-bottom";
    board[17][13] = "barrier.bottom-end";

    // right upside down "T"s

    // left upside down "L"s
    board[15][2] = "barrier.right-end";
    board[15][3] = "barrier.bottom-left";
    board[16][3] = "barrier.top-bottom";
    board[17][3] = "barrier.top-end";

    board[15][16] = "barrier.left-end";
    board[15][15] = "barrier.bottom-right";
    board[16][15] = "barrier.top-bottom";
    board[17][15] = "barrier.top-end";

    // right upside down "L"s  


    // empty spots between barriers
    for (var i = 16; i < 18; i++){
        board[8][i] = "ground";
        board[12][i] = "ground";
        board[8][i-15] = "ground";
        board[12][i-15] = "ground";        
    }

    board[10][18] = "dot";
    board[10][0] = "dot";

    board[pacmanY][pacmanX] = pacmanMouth;

}

document.addEventListener('keydown', async function(e) {
    if (!(e.keyCode >= 37 && e.keyCode <= 40)) { return; }

    switch (e.keyCode){
        case 37:
            console.log('left');
            direction = "left";
            break;
        case 38:
            console.log('up');
            direction = "up";
            break;
        case 39:
            console.log('right');
            direction = "right";
            break;
        case 40:
            console.log('down');
            direction = "down";
            break;
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(){
    for (var i = 0; i < length; i++){
        for (var j = 0; j < height; j++){
            // console.log("board." + i + "." + j + " is: " board[j][i]);
            
            // characters
            if (board[j][i] == pacmanMouth){
                document.getElementById("board." + i + "." + j).src = "../Images/" + pacmanMouth + ".png";
            }

            else if (board[j][i] == orangeGhostEyes){
                document.getElementById("board." + i + "." + j).src = "../Images/" + orangeGhostEyes + ".png";
            }
            else if (board[j][i] == cyanGhostEyes){
                document.getElementById("board." + i + "." + j).src = "../Images/" + cyanGhostEyes + ".png";
            }
            else if (board[j][i] == redGhostEyes){
                document.getElementById("board." + i + "." + j).src = "../Images/" + redGhostEyes + ".png";
            }
            else if (board[j][i] == pinkGhostEyes){
                document.getElementById("board." + i + "." + j).src = "../Images/" + pinkGhostEyes + ".png";
            }
            
            // barriers
            else if (board[j][i] == "barrier.top-bottom"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-Bottom.png";
            }
            else if (board[j][i] == "barrier.left-right"){
                document.getElementById("board." + i + "." + j).src = "../Images/Left-Right.png";
            }

            else if (board[j][i] == "barrier.bottom-right"){
                document.getElementById("board." + i + "." + j).src = "../Images/Bottom-Right.png";
            }
            else if (board[j][i] == "barrier.bottom-left"){
                document.getElementById("board." + i + "." + j).src = "../Images/Bottom-Left.png";
            }
            else if (board[j][i] == "barrier.top-right"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-Right.png";
            }
            else if (board[j][i] == "barrier.top-left"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-Left.png";
            }

            else if (board[j][i] == "barrier.top-end"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-End.png";
            }
            else if (board[j][i] == "barrier.bottom-end"){
                document.getElementById("board." + i + "." + j).src = "../Images/Bottom-End.png";
            }
            else if (board[j][i] == "barrier.left-end"){
                document.getElementById("board." + i + "." + j).src = "../Images/Left-End.png";
            }
            else if (board[j][i] == "barrier.right-end"){
                document.getElementById("board." + i + "." + j).src = "../Images/Right-End.png";
            }

            else if (board[j][i] == "barrier.left-bottom-right"){
                document.getElementById("board." + i + "." + j).src = "../Images/Left-Bottom-Right.png";
            }
            else if (board[j][i] == "barrier.top-left-bottom"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-Left-Bottom.png";
            }
            else if (board[j][i] == "barrier.left-top-right"){
                document.getElementById("board." + i + "." + j).src = "../Images/Left-Top-Right.png";
            }
            else if (board[j][i] == "barrier.top-right-bottom"){
                document.getElementById("board." + i + "." + j).src = "../Images/Top-Right-Bottom.png";
            } 

            // everything else
            else if (board[j][i] == "ground"){
                document.getElementById("board." + i + "." + j).src = "../Images/Empty-Square.png";
            }
            else if (board[j][i] == "dot"){
                document.getElementById("board." + i + "." + j).src = "../Images/Normal-Pellet.png";
            }
            else if (board[j][i] == "ghost-gate"){
                document.getElementById("board." + i + "." + j).src = "../Images/Ghost-Gate.png";
            }
        }
    }
    calculateScore(dotsEaten);
}

function play() {
    startGame();
}


async function startGame(){
    moveQueue = [];

    boardOne();

    var debug = false;

    while (!gameOver()){
        //runPacman();
        runRedGhost();
        //runOrangeGhost();
        //runCyanGhost();
        //runPinkGhost();

        draw();

        gameOver();

        await sleep(150);
    }

    draw();

    return;

}

function gameOver(){
    if (board[pacmanY][pacmanX] == orangeGhostEyes){
        return true;
    } else if (board[pacmanY][pacmanX] == cyanGhostEyes){
        return true;
    } else if (board[pacmanY][pacmanX] == redGhostEyes){
        return true;
    } else if (board[pacmanY][pacmanX] == pinkGhostEyes){
        return true;
    } else {
        return false;
    }
}

function calculateScore(){
    document.getElementById("scoreOutput").textContent = ("Score: " + dotsEaten);
}

// pacman function
var openOrClosed = "open";

function runPacman(){
    if (direction == "right"){ 
        board[pacmanY][pacmanX] = "ground";
        if (board[pacmanY][pacmanX+1] == "dot"){
            dotsEaten++;
            pacmanX++; 
        } else if (board[pacmanY][pacmanX+1] == "ground"){
            pacmanX++; 
        }
        pacmanMouth = "Pacman-Open-Right";
    }
    else if (direction == "left"){ 
        board[pacmanY][pacmanX] = "ground";
        if (board[pacmanY][pacmanX-1] == "dot"){
            dotsEaten++;
            pacmanX--; 
        } else if (board[pacmanY][pacmanX-1] == "ground"){
            pacmanX--; 
        }
        pacmanMouth = "Pacman-Open-Left";
    }
    else if (direction == "up"){ 
        board[pacmanY][pacmanX] = "ground";
        if (board[pacmanY-1][pacmanX] == "dot"){       
            dotsEaten++;
            pacmanY--; 
        } else if (board[pacmanY-1][pacmanX] == "ground"){       
            pacmanY--; 
        }
        pacmanMouth = "Pacman-Open-Up";
    }
    else if (direction == "down"){
        board[pacmanY][pacmanX] = "ground";
        if (board[pacmanY+1][pacmanX] == "dot"){        
            dotsEaten++;
            pacmanY++; 
        } else if (board[pacmanY+1][pacmanX] == "ground"){        
            pacmanY++; 
        }
        pacmanMouth = "Pacman-Open-Down";
    }

    if (direction == "right" && pacmanX == 18 && pacmanY == 10){ 
        board[pacmanY][pacmanX] = "ground";
        pacmanX = 0;
        pacmanMouth = "Pacman-Open-Right";
    }
    if (direction == "left" && pacmanX == 0 && pacmanY == 10){ 
        board[pacmanY][pacmanX] = "ground";
        pacmanX = 18;
        pacmanMouth = "Pacman-Open-Left";
    }

    if (openOrClosed == "closed"){
        pacmanMouth = "Pacman-Closed";
    }

    board[pacmanY][pacmanX] = pacmanMouth;

    if (openOrClosed == "closed"){
        openOrClosed = "open";
    } else if (openOrClosed == "open"){
        openOrClosed = "closed";
    }
}

// Ghost Functions

// Red Ghost (Blinky)

var redMove = 'd';
var redX = 8;
var redY = 9;
var randomTurn;
    
async function runRedGhost(){
    
    randomTurn = Math.floor(Math.random() * 4);

    // while   (
    //          ( 
    //             (
    //              (randomTurn == 0 && board[redY][redX+1] != "dot") || 
    //              (randomTurn == 1 && board[redY][redX-1] != "dot") || 
    //              (randomTurn == 2 && board[redY-1][redX] != "dot") || 
    //              (randomTurn == 3 && board[redY+1][redX] != "dot")
    //             ) &&
    //             (
    //              (randomTurn == 0 && board[redY][redX+1] != "ground") || 
    //              (randomTurn == 1 && board[redY][redX-1] != "ground") || 
    //              (randomTurn == 2 && board[redY-1][redX] != "ground") || 
    //              (randomTurn == 3 && board[redY+1][redX] != "ground") 
    //             ) &&
    //             (
    //              (randomTurn == 0 && board[redY][redX+1] != pacmanMouth) || 
    //              (randomTurn == 1 && board[redY][redX-1] != pacmanMouth) || 
    //              (randomTurn == 2 && board[redY-1][redX] != pacmanMouth) || 
    //              (randomTurn == 3 && board[redY+1][redX] != pacmanMouth)
    //             ) && 
    //             board[redY-1][redX] != "ghost-gate"
    //           ) &&
    //           (
    //            (randomTurn == 0 && redMove == 'l') || 
    //            (randomTurn == 1 && redMove == 'r') || 
    //            (randomTurn == 2 && redMove == 'd') || 
    //            (randomTurn == 3 && redMove == 'u')
    //           )
              
    //         ){

    //                 randomTurn = Math.floor(Math.random() * 4);

                    
    // } 

    while   (
        ( 
          // right
          randomTurn == 0 && (
           (board[redY][redX+1] != "dot") || (board[redY][redX+1] != "ground") ||
           (board[redY][redX+1] != pacmanMouth) || (redMove == 'l')
          ) &&
          // left
          (
           (randomTurn == 1 && board[redY][redX-1] != "dot") ||
           (randomTurn == 1 && board[redY][redX-1] != "ground") || 
           (randomTurn == 1 && board[redY][redX-1] != pacmanMouth) ||
           (randomTurn == 1 && redMove == 'r') 
          ) &&
          // up
          (
           (randomTurn == 2 && board[redY-1][redX] != "dot") ||
           (randomTurn == 2 && board[redY-1][redX] != "ground") ||
           (randomTurn == 2 && board[redY-1][redX] != pacmanMouth) || 
           (randomTurn == 2 && redMove == 'd')
          ) && 
          // down
          (
           (randomTurn == 3 && board[redY+1][redX] != "dot") ||
           (randomTurn == 3 && board[redY+1][redX] != "ground") ||
           (randomTurn == 3 && board[redY+1][redX] != pacmanMouth) ||
           (randomTurn == 3 && redMove == 'u')
          )
        ) && 
        board[redY-1][redX] != "ghost-gate"        
      ){

              randomTurn = Math.floor(Math.random() * 4);

              
    } 
    
    if (redY == 10 && redX == 10){
        randomTurn = 1;
    }

    if (redY == 10 && redX == 9){
        randomTurn == 2;
    }

    if (redY == 9 && redX == 9){
        randomTurn == 2;
    }

    // right
    if(randomTurn == 0){
        redMove = 'r';
        redGhostEyes = "Red-Right";
        board[redY][redX] = "dot";
        redX++; 
    }

    // left
    if(randomTurn == 1){
        redMove = 'l';
        redGhostEyes = "Red-Left";
        board[redY][redX] = "dot";
        redX--; 
    }

    // up
    if(randomTurn == 2){
        redMove = 'u';
        redGhostEyes = "Red-Up";
        board[redY][redX] = "dot";
        redY--; 
    }

    // down
    if(randomTurn == 3){
        redMove = 'd';
        redGhostEyes = "Red-Down";
        board[redY][redX] = "dot";
        redY++;         
    }
    

    board[redY][redX] = redGhostEyes;
}

// Orange Ghost (aka Clyde)

var orangeMove = 'r';
var orangeX = 1;
var orangeY = 1;
var randomTurn;
    
async function runOrangeGhost(){
    
    randomTurn = Math.floor(Math.random() * 4);

    while   (
              ( 
                (
                 (randomTurn == 0 && board[orangeY][orangeX+1] != "dot") || 
                 (randomTurn == 1 && board[orangeY][orangeX-1] != "dot") || 
                 (randomTurn == 2 && board[orangeY-1][orangeX] != "dot") || 
                 (randomTurn == 3 && board[orangeY+1][orangeX] != "dot")
                ) &&
                (
                 (randomTurn == 0 && board[orangeY][orangeX+1] != "ground") || 
                 (randomTurn == 1 && board[orangeY][orangeX-1] != "ground") || 
                 (randomTurn == 2 && board[orangeY-1][orangeX] != "ground") || 
                 (randomTurn == 3 && board[orangeY+1][orangeX] != "ground") 
                ) &&
                (
                 (randomTurn == 0 && board[orangeY][orangeX+1] != pacmanMouth) || 
                 (randomTurn == 1 && board[orangeY][orangeX-1] != pacmanMouth) || 
                 (randomTurn == 2 && board[orangeY-1][orangeX] != pacmanMouth) || 
                 (randomTurn == 3 && board[orangeY+1][orangeX] != pacmanMouth)
                ) && board[orangeY-1][orangeX] != "ghost-gate"
              ) 
              // &&
            //   (
            //     (randomTurn == 0 && orangeMove == 'l') || 
            //     (randomTurn == 1 && orangeMove == 'r') || 
            //     (randomTurn == 2 && orangeMove == 'd') || 
            //     (randomTurn == 3 && orangeMove == 'u')
            //   )
            ){
                    

                    randomTurn = Math.floor(Math.random() * 4);

                    
    } 


    
    if (orangeY == 10 && orangeX == 10){
        randomTurn = 1;
    }

    if (orangeY == 10 && orangeX == 9){
        randomTurn == 2;
    }

    if (orangeY == 9 && orangeX == 9){
        randomTurn == 2;
    }

    // right
    if(randomTurn == 0){
        orangeMove = 'r';
        orangeGhostEyes = "Orange-Right";
        board[orangeY][orangeX] = "dot";
        orangeX++; 
    }

    // left
    if(randomTurn == 1){
        orangeMove = 'l';
        orangeGhostEyes = "Orange-Left";
        board[orangeY][orangeX] = "dot";
        orangeX--; 
    }

    // up
    if(randomTurn == 2){
        orangeMove = 'u';
        orangeGhostEyes = "Orange-Up";
        board[orangeY][orangeX] = "dot";
        orangeY--; 
    }

    // down
    if(randomTurn == 3){
        orangeMove = 'd';
        orangeGhostEyes = "Orange-Down";
        board[orangeY][orangeX] = "dot";
        orangeY++;         
    }
    

    board[orangeY][orangeX] = orangeGhostEyes;
}

// Cyan Ghost (Inky)

var cyanMove = 'u';
var cyanX = 1;
var cyanY = 20;
var randomTurn;
    
async function runCyanGhost(){
    
    randomTurn = Math.floor(Math.random() * 4);

    while   (
              ( 
                (
                 (randomTurn == 0 && board[cyanY][cyanX+1] != "dot") || 
                 (randomTurn == 1 && board[cyanY][cyanX-1] != "dot") || 
                 (randomTurn == 2 && board[cyanY-1][cyanX] != "dot") || 
                 (randomTurn == 3 && board[cyanY+1][cyanX] != "dot")
                ) &&
                (
                 (randomTurn == 0 && board[cyanY][cyanX+1] != "ground") || 
                 (randomTurn == 1 && board[cyanY][cyanX-1] != "ground") || 
                 (randomTurn == 2 && board[cyanY-1][cyanX] != "ground") || 
                 (randomTurn == 3 && board[cyanY+1][cyanX] != "ground") 
                ) &&
                (
                 (randomTurn == 0 && board[cyanY][cyanX+1] != pacmanMouth) || 
                 (randomTurn == 1 && board[cyanY][cyanX-1] != pacmanMouth) || 
                 (randomTurn == 2 && board[cyanY-1][cyanX] != pacmanMouth) || 
                 (randomTurn == 3 && board[cyanY+1][cyanX] != pacmanMouth)
                ) && board[cyanY-1][cyanX] != "ghost-gate"
              )  
              // &&
            //   (
            //     (randomTurn == 0 && cyanMove == 'l') || 
            //     (randomTurn == 1 && cyanMove == 'r') || 
            //     (randomTurn == 2 && cyanMove == 'd') || 
            //     (randomTurn == 3 && cyanMove == 'u')
            //   )
            ){

                
                    randomTurn = Math.floor(Math.random() * 4);

                    
    } 


    
    if (cyanY == 10 && cyanX == 10){
        randomTurn = 1;
    }

    if (cyanY == 10 && cyanX == 9){
        randomTurn == 2;
    }

    if (cyanY == 9 && cyanX == 9){
        randomTurn == 2;
    }

    // right
    if(randomTurn == 0){
        cyanMove = 'r';
        cyanGhostEyes = "Cyan-Right";
        board[cyanY][cyanX] = "dot";
        cyanX++; 
    }

    // left
    if(randomTurn == 1){
        cyanMove = 'l';
        cyanGhostEyes = "Cyan-Left";
        board[cyanY][cyanX] = "dot";
        cyanX--; 
    }

    // up
    if(randomTurn == 2){
        cyanMove = 'u';
        cyanGhostEyes = "Cyan-Up";
        board[cyanY][cyanX] = "dot";
        cyanY--; 
    }

    // down
    if(randomTurn == 3){
        cyanMove = 'd';
        cyanGhostEyes = "Cyan-Down";
        board[cyanY][cyanX] = "dot";
        cyanY++;         
    }
    

    board[cyanY][cyanX] = cyanGhostEyes;
}

// Pink Ghost (Pinky)

var pinkMove = 'l';
var pinkX = 17;
var pinkY = 20;
var randomTurn;
    
async function runPinkGhost(){
    
    randomTurn = Math.floor(Math.random() * 4);

    while   (
              ( 
                (
                 (randomTurn == 0 && board[pinkY][pinkX+1] != "dot") || 
                 (randomTurn == 1 && board[pinkY][pinkX-1] != "dot") || 
                 (randomTurn == 2 && board[pinkY-1][pinkX] != "dot") || 
                 (randomTurn == 3 && board[pinkY+1][pinkX] != "dot")
                ) &&
                (
                 (randomTurn == 0 && board[pinkY][pinkX+1] != "ground") || 
                 (randomTurn == 1 && board[pinkY][pinkX-1] != "ground") || 
                 (randomTurn == 2 && board[pinkY-1][pinkX] != "ground") || 
                 (randomTurn == 3 && board[pinkY+1][pinkX] != "ground") 
                ) &&
                (
                 (randomTurn == 0 && board[pinkY][pinkX+1] != pacmanMouth) || 
                 (randomTurn == 1 && board[pinkY][pinkX-1] != pacmanMouth) || 
                 (randomTurn == 2 && board[pinkY-1][pinkX] != pacmanMouth) || 
                 (randomTurn == 3 && board[pinkY+1][pinkX] != pacmanMouth)
                ) && board[pinkY-1][pinkX] != "ghost-gate"
              )  
              // &&
            //   (
            //     (randomTurn == 0 && pinkMove == 'l') || 
            //     (randomTurn == 1 && pinkMove == 'r') || 
            //     (randomTurn == 2 && pinkMove == 'd') || 
            //     (randomTurn == 3 && pinkMove == 'u')
            //   )
            ){


                    randomTurn = Math.floor(Math.random() * 4);

                    
    } 


    
    if (pinkY == 10 && pinkX == 10){
        randomTurn = 1;
    }

    if (pinkY == 10 && pinkX == 9){
        randomTurn == 2;
    }

    if (pinkY == 9 && pinkX == 9){
        randomTurn == 2;
    }

    // right
    if(randomTurn == 0){
        pinkMove = 'r';
        pinkGhostEyes = "Pink-Right";
        board[pinkY][pinkX] = "dot";
        pinkX++; 
    }

    // left
    if(randomTurn == 1){
        pinkMove = 'l';
        pinkGhostEyes = "Pink-Left";
        board[pinkY][pinkX] = "dot";
        pinkX--; 
    }

    // up
    if(randomTurn == 2){
        pinkMove = 'u';
        pinkGhostEyes = "Pink-Up";
        board[pinkY][pinkX] = "dot";
        pinkY--; 
    }

    // down
    if(randomTurn == 3){
        pinkMove = 'd';
        pinkGhostEyes = "Pink-Down";
        board[pinkY][pinkX] = "dot";
        pinkY++;         
    }
    

    board[pinkY][pinkX] = pinkGhostEyes;
}

function calculateScore(dots){
    document.getElementById("scoreOutput").textContent = ("Score: " + dots);
    return dots;
}