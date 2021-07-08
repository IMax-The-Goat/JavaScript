var taken = [false, false, false, false, false, false, false, false, false];
var board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
var spot;
var open = 9;
var turn = 1;
var game_over = false;
var winner = "";
    
function valid(spot, taken){
    while (taken[spot] == true){
        console.log("That's not avaible\ngo again\n");
        chooseSpot(spot);
    }
}    

function winning_stuff(board, open, game_over) {
        if (open == 0){
            game_over = true;
            console.log("your done\nno one won\n");
            winner = "no one";
        }
        else if(board[0] == board[1] && board[1] == board[2] && board[0] != ' '){
            game_over = true;
            console.log(board[1] + " won the game\n");
            winner = board[1];
        }
        else if(board[3] == board[4] && board[4] == board[5] && board[3] != ' '){
            game_over = true;
            console.log(board[3] + " won the game\n");
            winner = board[3];
        }
        else if(board[6] == board[7] && board[7] == board[8] && board[6] != ' '){
            game_over = true;
            console.log(board[6] + " won the game\n");
            winner = board[6];
        }
        else if(board[0] == board[3] && board[3] == board[6] && board[0] != ' '){
            game_over = true;
            console.log(board[0] + " won the game\n");
            winner = board[0];
        }
        else if(board[1] == board[4] && board[4] == board[7] && board[1] != ' '){
            game_over = true;
            console.log(board[1] + " won the game\n");
            winner = board[1];
        }
        else if(board[2] == board[5] && board[5] == board[8] && board[2] != ' '){
            game_over = true;
            console.log(board[2] + " won the game\n");
            winner = board[2];
        }
        else if(board[0] == board[4] && board[4] == board[8] && board[0] != ' '){
            game_over = true;
            console.log(board[0] + " won the game\n");
            winner = board[0];
        }
        else if(board[2] == board[4] && board[4] == board[6] && board[2] != ' '){
            game_over = true;
            console.log(board[2] + " won the game\n");
            winner = board[2];
        }
        else{
            game_over = false;
        }

    return game_over;
}

function draw(brd){
    console.log("   |   |   \n");
    console.log(" " + brd[0] +  " | " + brd[1] + " | " + brd[2] + " \n");
    console.log("___|___|___\n");
    console.log("   |   |   \n");
    console.log(" " + brd[3] +  " | " + brd[4] + " | " + brd[5] + " \n");
    console.log("___|___|___\n");
    console.log("   |   |   \n");
    console.log(" " + brd[6] +  " | " + brd[7] + " | " + brd[8] + " \n");
    console.log("   |   |   \n\n");

    document.getElementById("row1").innerHTML = brd[0];
    document.getElementById("row2").innerHTML = brd[1];
    document.getElementById("row3").innerHTML = brd[2];
    document.getElementById("row4").innerHTML = brd[3];
    document.getElementById("row5").innerHTML = brd[4];
    document.getElementById("row6").innerHTML = brd[5];
    document.getElementById("row7").innerHTML = brd[6];
    document.getElementById("row8").innerHTML = brd[7];
    document.getElementById("row9").innerHTML = brd[8];

    for (var cell = 0; cell < 9; cell++){
        if (brd[cell] == 'X'){
            document.getElementById("row" + (cell+1)).style.color = "red";
        }
        else if (brd[cell] == 'O'){
            document.getElementById("row" + (cell+1)).style.color = "blue";
        }
    }

}

function chooseSpot(square){
    console.log(turn);
    if (game_over == false && turn == 1 && taken[square] == false) {
        document.getElementById("output").innerHTML = "Player Two's Turn";
        console.log(square);
        // valid(square, taken);
        taken[square] = true;
        board[square] = 'X';
        open--;
        turn = 2;
    }
    else if (game_over == false && turn == 2 && taken[square] == false) {
        document.getElementById("output").innerHTML = "Player One's Turn";
        // valid(square, taken);
        taken[square] = true;
        board[square] = 'O';
        open--;
        turn = 1;
    }

    draw(board);
    game_over = winning_stuff(board, open, game_over);
    
    if (game_over == true && winner == 'X') {
        document.getElementById("output").innerHTML = ("Player 1 Wins!!!");
        document.getElementById("output").style.color = "darkred";
        return 0;
    } 
    if (game_over == true && winner == 'O') {
        document.getElementById("output").innerHTML = ("Player 2 Wins!!!");
        document.getElementById("output").style.color = "darkblue";
        return 0;
    }
}

function restart(){
    taken = [false, false, false, false, false, false, false, false, false];
    board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    spot;
    open = 9;
    turn = 1;
    game_over = false;
    draw(board);
    winner = "";
    document.getElementById("output").innerHTML = "Player One's Turn";

}
