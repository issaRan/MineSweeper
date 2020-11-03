// var BoardSize = {
//     row=0,col=0
// }

function initlizeBoardSize(difficulty){
    console.log(difficulty)
    if (difficulty == 'easy'){BoardSize.row = 8,BoardSize.col = 10}
    if (difficulty == 'meduim'){BoardSize.row = 14,BoardSize.col = 18}
    else{BoardSize.row = 20,BoardSize.col=24}
    console.log(BoardSize.col)
    console.log(BoardSize.row)
}
function initliazeBoard(){
    initlizeBoardSize(document.getElementById("level").value);
}