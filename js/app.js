
/*-------------------------------- Constants --------------------------------*/
const player_X = 1;
const player_O = -1;

const colors = {     
    null: 'gainsboro',
    '1': 'palegreen',
    '-1': 'plum'
}  //created object to represent square states based on color (empty, clicked)

//defines the 8 winning patterns, nested array
const winningPattern = [ [ 0, 1, 2], [ 3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]; 
/*---------------------------- Variables (state) ----------------------------*/

let isWinner; //this variable will be updated by checkForWinner function
let board = []; 
let playerTurn = null; //this variable will be initialized by initialize function()


/*------------------------ Cached Element References ------------------------*/
 const sq0 = document.getElementById("sq0");    //connect html grid areas to javascript via cached elememt references
 const sq1 = document.getElementById("sq1");
 const sq2 = document.getElementById("sq2");
 const sq3 = document.getElementById("sq3");
 const sq4 = document.getElementById("sq4");
 const sq5 = document.getElementById("sq5");
 const sq6 = document.getElementById("sq6");
 const sq7 = document.getElementById("sq7");
 const sq8 = document.getElementById("sq8");

 const squares = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8]; //create array of cached element references for more concise access to grid areas
 const messageOutput = document.getElementById('message'); //cached reference
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)   //event listeners to handle click
document.getElementById('reset').addEventListener('click', initialize)    // on board and reset button

/*-------------------------------- Functions -------------------------------*/

// Initialization function: decides first turn, updates player, initializes board state
function initialize() {
    isWinner = null;
    board = [null, null, null, null, null, null, null, null, null];  //initialize null board to correspond with colors object
    playerTurn = 1;
    squares.forEach((idx) => {idx.innerHTML = ' ';})  //reset inner html on board
    render();
    confetti.stop()  //stop confetti drop if previous game 
}

function changeColor(element, index) {  
    squares[index].style.backgroundColor = colors[element];
}  //helperfunction for render uses the squares array of cached element references (will initialize to grey)

function render() {
    board.forEach((element, index) => { 
        changeColor(element, index);
    });
    if (isWinner === 'T') {
        messageOutput.innerHTML = "🐈 🐈 CaTs GaMe! 🐈 🐈";
    }  
    else if (isWinner) {
        messageOutput.innerHTML = `Congrats ${colors[isWinner].toUpperCase()} You Won!`;
        confetti.start(5000);
    } 
    else {
        messageOutput.innerHTML = `${colors[playerTurn].toUpperCase()}'s Turn`;
    }
}

function getWinner() {
    for (let i = 0; i < winningPattern.length; i++){
        if (board[0] === board[1] && board[0] === board[2]) return board[0];
        if (board[3] === board[4] && board[3] === board[5]) return board[5]; 
        if (board[6] === board[7] && board[7] === board[8]) return board[7];
        if (board[0] === board[3] && board[2] === board[6]) return board[3]; 
        if (board[1] === board[4] && board[1] === board[7]) return board[4];
        if (board[2] === board[5] && board[2] === board[8]) return board[2];
        if (board[0] === board[4] && board[4] === board[8]) return board[8];
        if (board[2] === board[4] && board[2] === board[6]) return board[6]; 
        if (board.includes(null)) return null;
        return 'T';    
    }       
}       

function handleClick(click) {
    for(let i = 0; i <board.length; i++){
        if (i == click.target.id.replace('sq', '')){ //this is type coercion to check if the index is the same as the clicked square
            if(board[i] != null) {
                messageOutput.innerHTML = 'Try a different square!';
                return;  //if the square is not null (i.e. already clicked and has a value, function returns and updates user)
            } else {
                board[i] = playerTurn
                    if(playerTurn === 1) {
                        squares[i].innerHTML = '🦄';
                    }
                    else {
                        squares[i].innerHTML = '🌈';
                    }
               playerTurn *= -1;
               isWinner = getWinner();
               render();    
            }
        }
    }
}
   
initialize();

