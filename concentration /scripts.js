// get all cards
let cards = document.querySelectorAll(".card");

// track flipped cards
let flippedCards = [];

// track turns
let turnCount = 0;
let turnDisplay = document.querySelector("#turns");

// prevent clicking during check
let lockBoard = false;


// click card 
cards.forEach(function(card){

card.addEventListener("click", function(){

// stop if already flipped or locked
if(lockBoard || card.classList.contains("flipped")){
return;
}

// flip de card
card.classList.add("flipped");

// store de card 
flippedCards.push(card);

// if 2 cards flipped then check match
if(flippedCards.length === 2){

lockBoard = true;
turnCount++;
turnDisplay.innerHTML = "Turns: " + turnCount;

checkMatch();

}

});

});


// check if cards match
function checkMatch(){

let card1 = flippedCards[0];
let card2 = flippedCards[1];

// get image to compare
let img1 = card1.querySelector("img").src;
let img2 = card2.querySelector("img").src;

console.log("Comparing:", img1, img2);

if(img1 === img2){

// match = you rock
setTimeout(function(){

card1.style.visibility = "hidden";
card2.style.visibility = "hidden";

resetTurn();
checkWin();

}, 500);

}else{

// no match = you suck
setTimeout(function(){

card1.classList.remove("flipped");
card2.classList.remove("flipped");

resetTurn();

}, 1000);

}

}


// reset after check
function resetTurn(){
flippedCards = [];
lockBoard = false;
}


// check if cards are gone
function checkWin(){

let remaining = document.querySelectorAll(".card:not([style*='hidden'])");

if(remaining.length === 0){
document.querySelector("#winMessage").innerHTML = "YOU WIN!";
}

}


// shuffle the cards on load (please work)
function shuffleCards(){

let board = document.querySelector("#game-board");

let cardArray = Array.from(cards);

cardArray.sort(() => Math.random() - 0.5);

cardArray.forEach(function(card){
board.appendChild(card);
});

}

shuffleCards();