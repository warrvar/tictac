
var counter = 0;
var cells = document.querySelectorAll('#field td');
var header = document.getElementById('header');
const xPlayerDisplay = document.querySelector('xPlayerDisplay');

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
        event.target.innerHTML = '<img src="melody.png" width=100 bc:transparent>';
    }
    else {
        header.innerText = 'It is X turn';
        event.target.innerHTML = '<img src="kuromi.png" width=100>';
    }

    if (isVictory()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerText = 'X is winner!';
        }
        else {
            header.innerText = 'O is winner!';
        }
    }
    else if (counter == 8) {
        header.innerText = 'Draw!';
    }

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
