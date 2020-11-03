var BoardSize = {
    row: 0,col:0
}

function initlizeBoardSize(difficulty){
    if (difficulty == 'easy'){BoardSize.row = 8,BoardSize.col = 10}
    if (difficulty == 'meduim'){BoardSize.row = 14,BoardSize.col = 18}
    else{BoardSize.row = 20,BoardSize.col=24}
}
function initliazeBoard(){
    initlizeBoardSize(document.getElementById("level").value);
    createBoard()
}

function createBoard(){
    strHTML = ''
    for(var i = 0; i<BoardSize.row; i++){
        strHTML += '<tr>'
        for(var j = 0; j< BoardSize.col;i++){
            strHTML += '<td></td>'
        }
        strHTML += '</tr>'
    }
    var board = document.querySelector('.board')
    board.innerHTML = strHTML
}