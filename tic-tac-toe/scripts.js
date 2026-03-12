// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "-", "o", "o" ];
let rowB = [ "o", "x", "x" ];
let rowC = [ "x", "o", "x" ];




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

  // track whose turn it is
let currentPlayer = "x";

// get all tic tac toe squares
let squares = document.querySelectorAll(".square");

// display whose turn it is
let turnDisplay = document.querySelector("#turn");
turnDisplay.innerHTML = "TURN: PLAYER X";


// add click event to each square
squares.forEach(function(square){

  square.addEventListener("click", function(){

    console.log("Square clicked");

    // prevent clicking filled squares
    if(square.innerHTML !== ""){
      return;
    }

    // place X or O on board
    square.innerHTML = currentPlayer;

    // get row and column from HTML data attributes
    let row = square.dataset.row;
    let col = square.dataset.col;

    console.log("Row:", row, "Column:", col);

    // update game arrays
    if(row === "A"){
      rowA[col] = currentPlayer;
    }

    if(row === "B"){
      rowB[col] = currentPlayer;
    }

    if(row === "C"){
      rowC[col] = currentPlayer;
    }

    console.log("Board state:", rowA, rowB, rowC);

    // check if someone won
    let result = checkGameboard(rowA,rowB,rowC);

    if(result === "x"){
      document.querySelector("#gameResult span").innerHTML = "X WINS!";
      return;
    }

    if(result === "o"){
      document.querySelector("#gameResult span").innerHTML = "O WINS!";
      return;
    }

    // switch turns
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

