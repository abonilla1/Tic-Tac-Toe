
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

document.querySelector('.board').addEventListener('click', handleClick)


/*-------------------------------- Functions -------------------------------*/

// Initialization function: decides first turn, updates player, initializes board state
function initialize() {
    messageOutput.innerHTML = "Let's Play Tic-Tac-Toe!";
    isWinner = null;
    board = [null, null, null, null, null, null, null, null, null];
    playerTurn = 1;
    squares.forEach((idx) => {idx.innerHTML = ' ';})
    render();
    stopConfetti();
}

function changeColor(element, index) {  
    squares[index].style.backgroundColor = colors[element];
}

function render() {
    board.forEach((element, index) => { 
        changeColor(element, index);
    });
    if (isWinner === 'T') {
        messageOutput.innerHTML = "CaTs GaMe!";
    }  
    else if (isWinner) {
        messageOutput.innerHTML = `Congrats ${colors[isWinner].toUpperCase()} You Won!`;
        confetti.start(5000);
    } 
    else {
        messageOutput.innerHTML = `${colors[playerTurn].toUpperCase()}'s Turn`;
    }
}

//   

// function checkIndex(board, index) {
//     if( board[index+1] === board[index+2] === board[index+3]){
//          return (board[index]);
//     } else if (board[index] === board[index+3] === board[index+6]) {
//         return (board[index]);
//     } else if (board[index] === board[index+4] === board[index+8]) {
//         return (board[index]);
//     } else if (board[index] === board[index+2] === board[index+4]) {
//         return (board[index]);
//     } else {
//         return 0;
//     }
// }

function getWinner() {
    for (let i = 0; i < winningPattern.length; i++){
    // let winInt = null;
    // board.forEach((element, index) => {
    //     winInt = checkIndex(element, index);
    //         if (winInt === 3) {
    //             return 1;
    //         } else if (winInt === -3) {
    //             return -1;
    //         } else {
    //             return null;
    //         }
        if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
        if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
        if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
        if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
        if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
        if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
        if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
        if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
        if (board.includes(null)) return null;
        return 'T';
    }
}

function handleClick(click) {
    for(let i = 0; i <board.length; i++){
        if (i == click.target.id.replace('sq', '')){
            if(board[i] != null) {
                messageOutput.innerHTML = 'Try a different square!';
                return;
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
document.getElementById('reset').addEventListener('click', initialize)
