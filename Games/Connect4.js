var bottom = [0, 0, 0, 0, 0, 0, 0];
var taken = [[],[],[],[],[],[],[]];
var board = [[],[],[],[],[],[],[]];
var turn = 1;

for (var row = 0; row < 6; row++){
    for (var column = 0; column < 7; column++){
        board[row][column] = ' ';
    }
}

var spot;
var spotA;
var spotB;

var open = 42;

var over = false;
var choice;
var score;

var alpha = -10000;
var beta = 10000;

function restart(){
    document.getElementById("output").innerHTML = "Player One's Turn";
    document.getElementById("output").style.color = "black";

    bottom = [0, 0, 0, 0, 0, 0, 0];
    taken = [[],[],[],[],[],[],[]];
    board = [[],[],[],[],[],[],[]];
    turn = 1;

    for (var row = 0; row < 6; row++){
        for (var column = 0; column < 7; column++){
            board[row][column] = ' ';
        }
    }

    spotA;
    spotB;

    open = 42;

    over = false;
    choice;
    score;

    alpha = -10000;
    beta = 10000;

    draw(board);
}

function game(board, taken){
    
    //rows
    
    for (var row = 0; row < 6; row++){
        var last = 'A';
        var counter = 0;
        for (var column = 0; column < 7; column++){
            if (board[row][column] == last){
                counter++;
                if (counter == 4){
                    if (last == 'X'){
                        score = -10;
                        
                    }
                    if (last == 'O'){
                        score = 10;
                        
                    }
                    return true;
                }   
            }
            else if (taken[row][column] == true){
                counter = 1;
                last = board[row][column];
            }
            else {
                counter = 0;
                last = 'A';
            }
        }
    }
    
    //columns
    
    for (var column = 0; column < 7; column++){
        var last = 'A';
        var counter = 0;
        for (var row = 0; row < 6; row++){
            if (board[row][column] == last){
                counter++;
                if (counter == 4){
                    if (last == 'X'){
                        score = -10;
                        
                    }
                    if (last == 'O'){
                        score = 10;
                        
                    }
                    return true;
                }   
            }
            else if (taken[row][column] == true){
                counter = 1;
                last = board[row][column];
            }
            else {
                counter = 0;
                last = 'A';
            }
        }
    }
    
    // up diagonals
    
    for (var row = 0; row < 6; row++){
        for (var column = 0; column < 7; column++){
            if ((board[row][column] == board[row + 1][column + 1]) 
            && (board[row][column] == board[row + 2][column + 2])
            && (board[row][column] == board[row + 3][column + 3])
            && (board[row][column] != ' ')
            && (row + 3 < 6) && (column + 3 < 7)){
                if (board[row][column] == 'X'){
                    score = -10;
                    
                }
                if (board[row][column] == 'O'){
                    score = 10;
                    
                }
                return true;
            }
        }
    }
    
    //down diagonals
    
    for (var row = 0; row < 6; row++){
        for (var column = 6; column >= 0; column--){
            if ((board[row][column] == board[row + 1][column - 1]) 
            && (board[row][column] == board[row + 2][column - 2])
            && (board[row][column] == board[row + 3][column - 3])
            && (board[row][column] != ' ')
            && (row + 3 < 6) && (column - 3 >= 0)){
                if (board[row][column] == 'X'){
                    score = -10;
                }
                if (board[row][column] == 'O'){
                    score = 10;
                }
                return true;
            }
        }
    }
    
    score = 0;
    return false;
}

function draw(board){
/*
    console.log("          CONNECT 4\n");
    console.log(" _1_ _2_ _3_ _4_ _5_ _6_ _7_ ");
    console.log("| " + board[5][0] + " | " + board[5][1] + " | " + board[5][2] + " | " + board[5][3] + " | " + board[5][4] + " | " + board[5][5] + " | " + board[5][6] + " |\n");
    console.log("| " + board[4][0] + " | " + board[4][1] + " | " + board[4][2] + " | " + board[4][3] + " | " + board[4][4] + " | " + board[4][5] + " | " + board[4][6] + " |\n");
    console.log("| " + board[3][0] + " | " + board[3][1] + " | " + board[3][2] + " | " + board[3][3] + " | " + board[3][4] + " | " + board[3][5] + " | " + board[3][6] + " |\n");
    console.log("| " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " | " + board[2][3] + " | " + board[2][4] + " | " + board[2][5] + " | " + board[2][6] + " |\n");
    console.log("| " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " | " + board[1][3] + " | " + board[1][4] + " | " + board[1][5] + " | " + board[1][6] + " |\n");
    console.log("| " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " | " + board[0][3] + " | " + board[0][4] + " | " + board[0][5] + " | " + board[0][6] + " |\n");
*/    
    
    for (var row = 5; row >= 0; row--){
        for (var column = 0; column < 7; column++){
            if (board [row][column] == " "){
                document.getElementById("col." + (column+1) + "." + (row+1)).style.backgroundColor = "rgb(155, 155, 155)";
                document.getElementById("col." + (column+1) + "." + (row+1)).style.color = "rgb(155, 155, 155)";
            }
            else if (board [row][column] == 'X'){
                document.getElementById("col." + (column+1) + "." + (row+1)).style.backgroundColor = "red";
                document.getElementById("col." + (column+1) + "." + (row+1)).style.color = "red";
            }
            else if (board [row][column] == 'O'){
                document.getElementById("col." + (column+1) + "." + (row+1)).style.backgroundColor = "gold";
                document.getElementById("col." + (column+1) + "." + (row+1)).style.color = "gold";
            }
        }
    }


    /*
    for (var row = 5; row >= 0; row--){
        for (var column = 0; column < 7; column++){
            console.log("board[" + row + "][" + column + "] ");
        }
        console.log(endl;
    }
    */
}

function minimax(board, taken, bottom, alpha, beta, depth, ismax){

    //base case
    
    //if ((depth == 0) || (game(board, taken))) {
    if ((game(board, taken)) || (depth == 0)) {
        //console.log("looking at (terminal) node with value: " + score);
        //draw(board);
        //console.log("score for this board is " + score);
        return (score - depth);
        //return (score);
    }

    //maximizer
    
    if (ismax)
    {
        var best = -1000;
        
        for (var c = 0; c < 7; c++) 
        {
            if (bottom[c] < 6)
            {
                board[bottom [c]][c] = 'O';
                taken[bottom [c]][c] = true;
                bottom [c] ++;
                
                        //console.log("looking at (maximize) child node: " + c);
                        // draw(board);
                        
                best = Math.max(best, minimax(board, taken, bottom, alpha, beta, depth-1, false));
                
                bottom [c] --;
                board[bottom [c]][c] = ' ';
                taken[bottom [c]][c] = false;
                
                alpha = Math.max(alpha, best);
                if (beta <= alpha){
                    break;
                }
            }
        }  

        return best;
    }
    
    //minimizer
    
    else {
        var best = 1000;
        
        for (var c = 0; c < 7; c++){
            if (bottom[c] < 6)
            {
                board[bottom [c]][c] = 'X';
                taken[bottom [c]][c] = true;
                bottom [c] ++;
                
                    //console.log("looking at (minimize) child node: " + c);
                    // draw(board);
                        
                best = Math.min(best, minimax(board, taken, bottom, alpha, beta, depth-1, true));
                bottom [c] --;
                
                board[bottom [c]][c] = ' ';
                taken[bottom [c]][c] = false;
                
                beta = Math.min(beta, best);
                if (beta <= alpha){
                    break;
                }
            }
        }    
        return best;
    }
}

function chooseSpot(col){
        
    if (over == false && turn == 1){
        console.log("Player 1, which column do you want to use\n");
        document.getElementById("output").innerHTML = "Player Two's Turn";
        spot = col;
        taken [bottom [spot] ] [spot] = true;
        board [bottom [spot] ] [spot] = 'X';
        bottom [spot] ++;
        open--;
        turn = 2;
    }
    else if (over == false && turn == 2){
        console.log("Player 2, which column do you want to use\n");
        document.getElementById("output").innerHTML = "Player One's Turn";
        spot = col;
        taken [bottom [spot]] [spot] = true;
        board [bottom [spot]] [spot] = 'O';
        bottom [spot] ++;
        open--;
        turn = 1;
    }

    draw(board);
    over = game(board, taken);
    console.log(score);
    console.log(board[bottom[spot]-1][spot]);
    
    if (over == true && board [bottom [spot]-1] [spot] == 'X'){
        console.log("Player 1 Wins!");
        document.getElementById("output").innerHTML = "Player One Wins!!!";
        document.getElementById("output").style.color = "darkred";
    }
    if (over == true && board [bottom [spot]-1] [spot] == 'O') {
        console.log("Player 2 Wins!");
        document.getElementById("output").innerHTML = "Player Two Wins!!!";
        document.getElementById("output").style.color = "gold";
    }    
}

function chooseSpotVsComp(col) {

    if (over == false){
        console.log("Player 1, which column do you want to use\n");
        document.getElementById("output").innerHTML = "Thinking...";
        spot = col;
        taken [bottom [spot] ] [spot] = true;
        board [bottom [spot] ] [spot] = 'X';
        bottom [spot] ++;
        open--;
        turn = 2;
    }

    draw(board);
    document.getElementById("output").innerHTML = "Thinking...";           
    over = game(board, taken);
    console.log(board[bottom[spot]-1][spot]);
    
    if (over == true && board [bottom [spot]-1] [spot] == 'X'){
        console.log("Player 1 Wins!");
        document.getElementById("output").innerHTML = "Player One Wins!!!";
        document.getElementById("output").style.color = "darkred";
        return 0;
    }
    
    var highest= -9999;
    var tempMinimaxValue; 

    if (over == false){
        for (var i = 0; i < 7; i++){
            if (bottom[i] < 6){
                board[bottom [i]][i] = 'O';
                taken[bottom [i]][i] = true;
                bottom [i] ++;

                // console.log("looking at (main) child node: " + i);
                // draw(board);
                    
                tempMinimaxValue =  minimax(board, taken, bottom, alpha, beta, 8, false);
                
                if (tempMinimaxValue > highest) {
                    highest = tempMinimaxValue;
                    spot = i;
                }
                
                bottom [i] --;
                board[bottom [i]][i] = ' ';
                taken[bottom [i]][i] = false;
            }
        }
    }

    board[bottom [spot]][spot] = 'O';
    taken[bottom [spot]][spot] = true;
    bottom [spot] ++;
    open--;
    turn = 1;

    draw(board);
    over = game(board, taken);
    console.log(board[bottom[spot]-1][spot]);

    document.getElementById("output").innerHTML = "Your Turn";           

    if (over == true && board [bottom [spot]-1] [spot] == 'O'){
        console.log("Comp Wins!");
        document.getElementById("output").innerHTML = "Computer Wins!!!";
        document.getElementById("output").style.color = "gold";
        return 0;
    }
}

function runMinimax(){
    
}

function main(){
    
    console.log("Welcome to CONNECT 4 Code Edition!\nWould you like to play vs. an A.I. or vs a friend\n");
    // cin >> choice;
        // while ((choice != "AI") && (choice != "friend")){
        //     console.log("*invalid*\nAI or friend?\n");
        //     cin >> choice;
        // }
        
    if (choice == "friend"){
        // system("clear");
        draw(board);
        
        while (over == false){
            if (over == true) {
                console.log("Player 2 wins!");
            }
            else {
                console.log("Player 1, which column do you want to use\n");
                spotA = spotA - 1;
                taken [bottom [spotA] ] [spotA] = true;
                board [bottom [spotA] ] [spotA] = 'X';
                bottom [spotA] ++;
                open--;
            }
            
            // system("clear");
            draw(board);
            over = game(board, taken);
            console.log(score);
            
            if (over == true) {
                console.log("Player 1 wins!");
            }
            else {
                console.log("Player 2, which column do you want to use\n");
                // cin>>spotB;
                //validB(spot, taken);
                spotB = spotB - 1;
                taken [bottom [spotB]] [spotB] = true;
                board [bottom [spotB]] [spotB] = 'O';
                bottom [spotB] ++;
                open--;
            }
            
            //console.log(minimax(board, taken, bottom, open, true);
            // system("clear");
            draw(board);
            over = game(board, taken);
            //console.log(score);
        }
    }
    
    else {
    while (over == false){
        // system("clear");
        draw(board);
        //console.log(score);
        
        console.log("Player 1, which column do you want to use\n");
        // cin>>spotA;
        spotA = spotA - 1;
        board [bottom [spotA] ] [spotA] = 'X';
        taken [bottom [spotA] ] [spotA] = true;
        bottom [spotA] ++;
        open--;
        
        over = game(board, taken);
        
        // system("clear");
        draw(board);
        //console.log(score);
        
        if (over) {
            console.log("human wins!");
        }
        
        else {
            var highest= -9999;
            var tempMinimaxValue;    
            
            for (var i = 0; i < 7; i++){
                if (bottom[i] < 6){
                    board[bottom [i]][i] = 'O';
                    taken[bottom [i]][i] = true;
                    bottom [i] ++;

                    console.log("looking at (main) child node: " + i);
                        
                    tempMinimaxValue =  minimax(board, taken, bottom, alpha, beta, 2, false);
                    
                    if (tempMinimaxValue > highest) {
                        highest = tempMinimaxValue;
                        spotB = i;
                    }
                    
                    bottom [i] --;
                    board[bottom [i]][i] = ' ';
                    taken[bottom [i]][i] = false;
                }
            }
                
            board[bottom [spotB]][spotB] = 'O';
            taken[bottom [spotB]][spotB] = true;
            bottom [spotB] ++;
            open--;
            
            over = game(board, taken);
            if (over) {
                console.log("AI wins!");
            }
        }
    }
    //// system("clear");
    draw(board);
    //console.log(score);
    }
}
