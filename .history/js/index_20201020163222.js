var BoardSize = {
    row,col
}

function initlizeBoardSizeo(difficulty){
    if (difficulty == 'easy'){BoardSize.row = 8,BoardSize.col = 10}
    if (difficulty == 'meduim'){BoardSize.row = 14,BoardSize.col = 18}
    else{BoardSize.row = 20,BoardSize.col=24}
}
function initliazeBoard(){
    initlizeBoardSize(document.getElementById("levels").value);
}

function createBoard(){

}