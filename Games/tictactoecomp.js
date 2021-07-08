/*
var taken = [false, false, false, false, false, false, false, false, false];
var board = ['0','1','2','3','4','5','6','7','8'];
var spot;
var cspot;
var open = 9;
var game_over = false;

function score(){
    var winner;
    
        if((board[0] == 'X') && (board[1] == 'X') && (board[2] == 'X')){
            winner = 'X';
        }
        else if((board[3] == 'X') &&(board[4] == 'X') &&(board[5] == 'X')){
            winner = 'X';
        }
        else if((board[6] == 'X') &&(board[7] == 'X') &&(board[8] == 'X')){
            winner = 'X';
        }
        else if((board[0] == 'X') &&(board[3] == 'X') &&(board[6] == 'X')){
            winner = 'X';
        }
        else if((board[1] == 'X') &&(board[4] == 'X') &&(board[7] == 'X')){
            winner = 'X';
        }
        else if((board[2] == 'X') &&(board[5] == 'X') &&(board[8] == 'X')){
            winner = 'X';
        }
        else if((board[0] == 'X') &&(board[4] == 'X') &&(board[8] == 'X')){
            winner = 'X';
        }
        else if((board[2] == 'X') &&(board[4] == 'X') &&(board[6] == 'X')){
            winner = 'X';
        }
        else if((board[0] == 'O') &&(board[1] == 'O') && (board[2] == 'O')){
            winner = 'O';
        }
        else if((board[3] == 'O') &&(board[4] == 'O') &&(board[5] == 'O')){
            winner = 'O';
        }
        else if((board[6] == 'O') &&(board[7] == 'O') &&(board[8] == 'O')){
            winner = 'O';
        }
        else if((board[0] == 'O') &&(board[3] == 'O') &&(board[6] == 'O')){
            winner = 'O';
        }
        else if((board[1] == 'O') &&(board[4] == 'O') &&(board[7] == 'O')){
            winner = 'O';
        }
        else if((board[2] == 'O') &&(board[5] == 'O') &&(board[8] == 'O')){
            winner = 'O';
        }
        else if((board[0] == 'O') &&(board[4] == 'O') &&(board[8] == 'O')){
            winner = 'O';
        }
        else if((board[2] == 'O') &&(board[4] == 'O') &&(board[6] == 'O')){
            winner = 'O';
        }

  
    if (winner == 'X') 
    {
        return -10;
    }
    else if (winner == 'O')
    {
        return 10;
    }
    else  // it is either a tie, or the game is not yet over
    {
        return 0;
    }
}
*/

function minimax(board, taken, depth, ismax){
    //console.log(xdepth++);
    //draw(board);
    
    //if ((score(board) == 10) || (score(board) == -10) || (winning_stuff(board, depth)))  
    if ((depth == 0) || (winning_stuff(board, depth))) {
        //console.log("we are at a terminal node\n");
        //draw(board);
        return (score(board) - depth);
    }

    
    if (ismax)
    {
        var best = -1000;
        
        for (var ndx = 0; ndx < 9; ndx++) 
        {
            
            if (taken[ndx] == false)
            {
                board[ndx] = 'O';
                taken[ndx] = true;
                
                //console.log("looking at child node:  ");
                //draw(board);
                var tmp = max(best, minimax(board, taken, depth-1, false));
                
                /*
                console.log("looking at child node:  ");
                draw(board);
                 console.log("max best: " + best);*/
                // console.log("minimax:  " + tmp + endl);
                

                best = max(best, tmp);
                
                board[ndx] = ndx+48;
                taken[ndx] = false;
            }
        }  

        return best;
    }
    else {
        var best = 1000;
        
        for (var ndx = 0; ndx < 9; ndx++) {
            
            if (taken[ndx] == false)
            {
                board[ndx] = 'X';
                taken[ndx] = true;
                
                 //console.log("looking at child node:  ");
                 //draw(board);
                 var tmp = min(best, minimax(board, taken, depth-1, true));
                 /*
                 console.log("looking at child node:  ");
                 draw(board);
                 console.log("min best: " + best);*/
                 //console.log("minimax:  " + tmp + endl);
                
                best = min(best, tmp);
        
                board[ndx] = ndx+48;
                taken[ndx] = false;
                
                
            }
        }  
        
        return best;
    }
}
/*

function winning_stuff(){
    var winner;
        if((board[0] == 'X') && (board[1] == 'X') && (board[2] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[3] == 'X') &&(board[4] == 'X') &&(board[5] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[6] == 'X') &&(board[7] == 'X') &&(board[8] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[0] == 'X') &&(board[3] == 'X') &&(board[6] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[1] == 'X') &&(board[4] == 'X') &&(board[7] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[2] == 'X') &&(board[5] == 'X') &&(board[8] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[0] == 'X') &&(board[4] == 'X') &&(board[8] == 'X')){
            winner = 'X';
            return true;
        }
        else if((board[2] == 'X') &&(board[4] == 'X') &&(board[6] == 'X')){
            winner = 'X';
            return true;
        }
        
        else if((board[0] == 'O') && (board[1] == 'O') && (board[2] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[3] == 'O') &&(board[4] == 'O') &&(board[5] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[6] == 'O') &&(board[7] == 'O') &&(board[8] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[0] == 'O') &&(board[3] == 'O') &&(board[6] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[1] == 'O') &&(board[4] == 'O') &&(board[7] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[2] == 'O') &&(board[5] == 'O') &&(board[8] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[0] == 'O') &&(board[4] == 'O') &&(board[8] == 'O')){
            winner = 'O';
            return true;
        }
        else if((board[2] == 'O') &&(board[4] == 'O') &&(board[6] == 'O')){
            winner = 'O';
            return true;
        }
        else if(open==0){
            return true;
        }
        else {
            return false;
        }

    return winner;    
}

function draw(brd){
    console.log("Tic-Tac-Toe\nHuman vs. Computer Edition\n");
    console.log("   |   |   \n");
    console.log(" "+brd[0]+ " | "+brd[1]+" | "+brd[2]+" \n");
    console.log("___|___|___\n");
    console.log("   |   |   \n");
    console.log(" "+brd[3]+ " | "+brd[4]+" | "+brd[5]+" \n");
    console.log("___|___|___\n");
    console.log("   |   |   \n");
    console.log(" "+brd[6]+ " | "+brd[7]+" | "+brd[8]+" \n");
    console.log("   |   |   \n\n");
}

function main(){
    var taken = [false, false, false, false, false, false, false, false, false];
    var board = ['0','1','2','3','4','5','6','7','8'];
    var spot;
    var cspot;
    var open = 9;
    var game_over = false;
    
    draw(board);
    
    while (game_over == false){
        console.log("Human, where do you want to go\n");
        cin >> spot;
        valid(spot, taken);
        taken[spot] = true;
        board[spot] = 'X';
        open--;
        system("clear");
        draw(board);
        
        game_over = winning_stuff(board, open);
        if ((game_over == true) && (open == 0)){
            console.log("It's a tie!!!\n");
            return 0;
        }
        else if (game_over == true){
            console.log("Humans win!!!\n");
            return 0;
        }
       
        // computer (O) maximizing
        var highest=  -100;
        var tempMinimaxValue;
        if (game_over == false) {
            console.log("Computer is thinking...\n");
            
            // DEBUG:  figure out what is the cspot
            for (var i = 0; i < 9; i++){
                if (taken[i] == false){
                    board[i] = 'O';
                    taken[i] = true;
                    //console.log("staring from node with taking slot:  " + i);
                    //draw(board);
                    tempMinimaxValue =  minimax(board, taken, open-1, false);
                    //console.log(tempMinimaxValue);
                    if (tempMinimaxValue > highest)
                    {
                        highest = tempMinimaxValue;
                        cspot = i;
                    }
                    board[i] = i+48;
                    taken[i] = false;
                }    
            }
            console.log("The best spot for me is: \n");
            console.log(cspot);
            //cvalid(cspot, taken, board);
            taken[cspot] = true;
            board[cspot] = 'O';
            open--;
        }
        
        system("clear");
        // gui
        draw(board);
    
        game_over = winning_stuff(board, open);
        if (game_over == true){
            console.log("My intellect is too high for you humans\nMuahaha!!!\n");
            return 0;
        }
    }
}
*/

var taken = [false, false, false, false, false, false, false, false, false];
var board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
var spot;
var open = 9;
var turn = 1;
var game_over = false;
var winner = "";
    
function valid(spot, taken){
    if (taken[spot] == true){
        console.log("That's not avaible\ngo again\n");
        return;
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
    if (game_over == false){// && turn == 1 && taken[square] == false) {
        document.getElementById("output").innerHTML = "Computer is Thinking...";
        console.log(square);
        // valid(square, taken);
        taken[square] = true;
        board[square] = 'X';
        open--;
        turn = 2;
    }

    console.log("next");

    game_over = winning_stuff(board, open, game_over);

    if (game_over == false){// && turn == 2 && taken[square] == false) {
        document.getElementById("output").innerHTML = "Your Turn";

        // computer (O) maximizing
        var highest=  -100;
        var tempMinimaxValue;

        if (game_over == false) {
            console.log("Computer is thinking...\n");
            
            // DEBUG:  figure out what is the cspot
            for (var i = 0; i < 9; i++){
                if (taken[i] == false){
                    board[i] = 'O';
                    taken[i] = true;
                    //console.log("staring from node with taking slot:  " + i);
                    //draw(board);
                    tempMinimaxValue =  minimax(board, taken, open-1, false);
                    //console.log(tempMinimaxValue);
                    if (tempMinimaxValue > highest)
                    {
                        highest = tempMinimaxValue;
                        cspot = i;
                    }
                    board[i] = i+48;
                    taken[i] = false;
                }    
            }
            console.log("The best spot for me is: \n");
            console.log(cspot);
            //cvalid(cspot, taken, board);
            taken[cspot] = true;
            board[cspot] = 'O';
            open--;
        }

        turn = 1;
    }

    draw(board);
    game_over = winning_stuff(board, open, game_over);
    console.log("next pt 2");
    
    if (game_over == true && winner == 'X') {
        document.getElementById("output").innerHTML = ("Player 1 Wins!!!");
        document.getElementById("output").style.color = "darkred";
        return 0;
    } 
    else if (game_over == true && winner == 'O') {
        document.getElementById("output").innerHTML = ("Computer!!!");
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
