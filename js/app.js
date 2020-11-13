
/*-------------------------------- Constants --------------------------------*/
const player_X = 
const player_O = 

const colors = {     
    null: grey,
    player_X: 'green',
    player_O: 'purple'
}  //created object to represent square states based on color (empty, clicked)

// Now to define the 8 winning patterns
const winPattern1 = [ 0, 1, 2]
const winPattern2 = [ 3, 4, 5]
const winPattern3 = [6, 7, 8]
// Win Patterns 1-3 handle horizontal wins
const winPattern4 = [0, 3, 6]
const winPattern5 = [1, 4, 7]
const winPattern6 = [2, 5, 8]
// Win Patterns 4-6 handle vertical wins
const winPattern7 = [0,4,8]
const winPattern8 = [2,4,6]
// Win Patterns 7 and 8 handle diagonal wins

const board = [ sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8 ] //an array corresponding to the html DIV board
/*---------------------------- Variables (state) ----------------------------*/

isWinner = null //this variable will be updated by checkForWinner function
// this variable will be used to control the flow of the game (comparison)
playerTurn = null //this variable will be initialized by initialize function()


/*------------------------ Cached Element References ------------------------*/
 const sq0 = document.getElementById("sq0")
 const sq1 = document.getElementById("sq1")
 const sq2 = document.getElementById("sq2")
 const sq3 = document.getElementById("sq3")
 const sq4 = document.getElementById("sq4")
 const sq5 = document.getElementById("sq5")
 const sq6 = document.getElementById("sq6")
 const sq7 = document.getElementById("sq7")
 const sq8 = document.getElementById("sq8")

// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/
function decideTurn() {
    //does some math random stuff to return either 0 or 1
    //  if 0, playero goes first
    // if 1, player x goes first
    // return 1 or 0
}

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading
function initialize () {
    // set up initial board all squares will be grey
        //utilize colors object
    // display initial message 
    // decideTurn and render board
}

// On-Click function:
// Set up what happens when one of the elements
// is clicked


function checkForWinner {
    
// Checks the current state of the board for

    //return isWinner;
} //this function will check for a winner by


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is