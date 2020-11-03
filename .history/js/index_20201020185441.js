var BoardSize = {
    row: 0,col:0
}

function initlizeBoardSize(difficulty){
    if (difficulty == 'easy'){BoardSize.row = 8,BoardSize.col = 10}
    if (difficulty == 'medium'){BoardSize.row = 14,BoardSize.col = 18}
    else{BoardSize.row = 20,BoardSize.col=24}
}
function initliazeBoard(){
    initlizeBoardSize(document.getElementById("level").value);
    createBoard()
}

function createBoard(){
    tableElem = document.createElement('table');
    for(var i = 0; i<BoardSize.row; i++){
        rowElem = document.createElement('tr');
        for(var j = 0; j< BoardSize.col;j++){
            colElem = document.createElement('td');
            rowElem.appendChild(colElem);
        }
        tableElem.appendChild(rowElem);
    }
    var board = document.querySelector('#board')
    board.innerHTML =tableElem
}