
var counter = 0;
var cells = document.querySelectorAll('#field td');
var header = document.getElementById('header');
let player = 'X'
let isPauseGame = false
let isGameStart = false
const xPlayerDisplay = document.querySelector('xPlayerDisplay');
const oPlayerDisplay = document.querySelector('#oPlayerDisplay')
const restartBtn = document.querySelector('#start-button')

function changePlayer() {
    player = (player == 'X') ? 'O' : 'X'
}
// function randomPick() {
//     // Pause the game to allow Computer to pick
//     isPauseGame = true

//     setTimeout(() => {
//         let randomIndex
//         do {
//             // Pick a random index
//             randomIndex = Math.floor(Math.random() * inputCells.length)
//         } while (
//             // Ensure the chosen cell is empty
//             inputCells[randomIndex] != ''
//         )

//         // Update the cell with Computer move
//         updateCell(cells[randomIndex], randomIndex, player)
//         // Check if Computer not won
//         if (!checkWinner()) {
//             changePlayer()
//             // Swith back to Human player
//             isPauseGame = false
//             return
//         }
//         player = (player == 'X') ? 'O' : 'X'
//     }, 1000) // Delay Computer move by 1 second
// }
function isVictory() {
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


function tap(event) {
    if (counter % 2 == 0) {
        header.innerText = 'It is O turn';
        event.target.innerHTML = '<img src="melody-removebg-preview.png" width=100 bc:transparent>';
    }
    else {
        header.innerText = 'It is X turn';
        event.target.innerHTML = '<img src="kuromi-removebg-preview.png" width=100>';
    }

    if (isVictory()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerText = 'X is winner!';
            
        }
        start-button.style.visibility == 'visible';
        else {
            header.innerText = 'O is winner!';
            
        }
        start-button.style.visibility == 'visible';
    }
    else if (counter == 8) {
        header.innerText = 'Draw!';
       
    }
    start-button.style.visibility == 'visible';
    counter++;
    event.target.removeEventListener('click', tap);
}


function startGame() {
    header.innerText = 'Tic Tac Toe';
    counter = 0;
    for (var cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame()
