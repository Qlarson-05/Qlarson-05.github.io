// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "-", "-", "-" ];
let rowB = [ "-", "-", "-" ];
let rowC = [ "-", "-", "-" ];



function checkGameboard(a, b, c) {
  
  console.log("Checking rows...");

  // Put rows into a single board array
  let board = [a, b, c];

  // Row checker
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== "-" &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]) {
      
      console.log("Row win found:", board[i][0]);
      return board[i][0];
    }
  }

// track player turn
let currentPlayer = "x";

// get all cells
let cells = document.querySelectorAll(".cell");

// get turn display
let turnDisplay = document.querySelector("#turn");

// add click events to cells
cells.forEach(function(cell, index){

cell.addEventListener("click", function(){

console.log("Cell clicked:", index);

// prevent double click
if(cell.innerHTML !== ""){
return;
}

// place mark
cell.innerHTML = currentPlayer;

// update board arrays
if(index < 3){
rowA[index] = currentPlayer;
}

else if(index < 6){
rowB[index - 3] = currentPlayer;
}

else{
rowC[index - 6] = currentPlayer;
}

console.log(rowA,rowB,rowC);

// check winner
let result = checkGameboard(rowA,rowB,rowC);

if(result === "x"){
document.querySelector("#gameResult span").innerHTML = "X WINS!";
return;
}

if(result === "o"){
document.querySelector("#gameResult span").innerHTML = "O WINS!";
return;
}

// switch players
if(currentPlayer === "x"){
currentPlayer = "o";
}else{
currentPlayer = "x";
}

// update turn display
turnDisplay.innerHTML = "TURN: PLAYER " + currentPlayer.toUpperCase();

});

});

  console.log("Checking columns...");

  // Colum checker
  for (let i = 0; i < 3; i++) {
    if (board[0][i] !== "-" &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]) {
      
      console.log("Column win found:", board[0][i]);
      return board[0][i];
    }
  }

  console.log("Checking diagonals...");

  // Diag (top left to bottom right)
  if (board[0][0] !== "-" &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]) {
    
    console.log("Diagonal win found:", board[0][0]);
    return board[0][0];
  }

  // Diag (top right to bottom left)
  if (board[0][2] !== "-" &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]) {
    
    console.log("Diagonal win found:", board[0][2]);
    return board[0][2];
  }

  console.log("No winner found. It's a draw.");
  
  // Draw
  return "d";
}



// **********************************************
// ***** DO NOT EDIT THE CODE BELOW THIS LINE
// **********************************************


// get a handle on the DOM element to be updated with the outcome
let gameOutputMsg = document.querySelector("#gameResult span");


// call your function checkGameboard() with the 3 rows
let winState = checkGameboard(rowA, rowB, rowC);

// test the returned value of the function
if (winState == "x") { 
  gameOutputMsg.innerHTML = "X wins";
  
} else if (winState == "o") {
  gameOutputMsg.innerHTML = "O wins";
  
} else if (winState == "d") {
  gameOutputMsg.innerHTML = "draw";
  
} else {
  gameOutputMsg.innerHTML = "unknown";
}

