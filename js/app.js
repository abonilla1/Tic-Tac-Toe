
/*-------------------------------- Constants --------------------------------*/
const player_X = 1;
const player_O = -1;

const colors = {     
    null: 'grey',
    player_X: 'green',
    player_O: 'purple'
}  //created object to represent square states based on color (empty, clicked)

// Now to define the 8 winning patterns
const winPattern1 = [ 0, 1, 2];
const winPattern2 = [ 3, 4, 5];
const winPattern3 = [6, 7, 8];
// Win Patterns 1-3 handle horizontal wins
const winPattern4 = [0, 3, 6];
const winPattern5 = [1, 4, 7];
const winPattern6 = [2, 5, 8];
// Win Patterns 4-6 handle vertical wins
const winPattern7 = [0,4,8];
const winPattern8 = [2,4,6];
// Win Patterns 7 and 8 handle diagonal wins

// const board = [ sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8 ] //an array corresponding to the browser board?
/*---------------------------- Variables (state) ----------------------------*/

let isWinner = null; //this variable will be updated by checkForWinner function
// this variable will be used to control the flow of the game (comparison)
let playerTurn = null; //this variable will be initialized by initialize function()
let boardState = [];



/*------------------------ Cached Element References ------------------------*/
 const sq0 = document.getElementById("sq0");
 const sq1 = document.getElementById("sq1");
 const sq2 = document.getElementById("sq2");
 const sq3 = document.getElementById("sq3");
 const sq4 = document.getElementById("sq4");
 const sq5 = document.getElementById("sq5");
 const sq6 = document.getElementById("sq6");
 const sq7 = document.getElementById("sq7");
 const sq8 = document.getElementById("sq8");
 
 const messageOutput = document.getElementById('message');
/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/

//function to randomly decide which player will go first
function decideTurn1() {
    let turn = Math.floor(Math.random() * 2);
    if (turn !== 0) {
        return true;
    } else {
        return false;
    }
}

// Initialization function: decides first turn, updates player, initializes board state
function initialize() {
    isWinner = null;
    messageOutput.textContent = "Let's Play Tic-Tac-Toe! Click anywhere to see who goes first."
    document.body.addEventListener('click', (e) =>{
        if ((decideTurn1())) {
            messageOutput.textContent = "Player 1 (X) goes first";
            playerTurn = 1;
        } else {
            messageOutput.textContent = "Player 2 (O) goes first";
            playerTurn = -1;
        }
    })
    boardState = [null, null, null, null, null, null, null, null, null] 
} 
    

function onClick() {
    document.board.addEventListener('click', (element) => {
        //make element color of clicker
    })
}

// document.body.addEventListener('click', (e)=> {
//     let audioVar = new Audio(`/audio/${e.target.id}.mp3`)
//     audioVar.volume = 0.2;
//     audioVar.play()
// })


//function checkForWinner {
    
// Checks the current state of the board for

    //return isWinner;
//} //this function will check for a winner by


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

initialize()
console.log(boardState)