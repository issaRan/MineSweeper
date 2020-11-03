var size = {
    row=0,col=0
}

function initlizeBoardSize(difficulty){
    console.log(difficulty)
    if (difficulty == 'easy'){size.row = 8,size.col = 10}
    if (difficulty == 'meduim'){size.row = 14,size.col = 18}
    else{size.row = 20,size.col=24}
    console.log(size.col)
    console.log(size.row)
}
function initliazeBoard(){
    initlizeBoardSize(document.getElementById("level").value);
}