var counter = 0;
var cells = document.querySelectorAll("#field td");
var header = document.getElementById("header");

function victoryCheck(){
    var combos = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3, 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
    ]
    for(var combo of combos){
        
    }
}
function tap(event){
    if(counter % 2 == 0){
        event.target.innerHTML = '<img src="close.png" width = 100 >';
    }
    else{
        event.target.innerHTML = '<img src="circle.png" width = 100>';
    }
    counter++;
}
function startGame(){
    header.innerText = "Tic Tac Toe";
    counter=0;
    for(var cell of cells){
        cell.innerHTML='';
        cell.addEventListener('click', tap)
    }
}

startGame();
