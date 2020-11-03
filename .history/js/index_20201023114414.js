document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let sqaures = []
 
    function createBoard(){
        for(let i = 0; i < width*width;i++){
            const sqaure = document.createElement('div')
            sqaure.setAttribute('id',i)
            grid.appendChild(sqaure)
            sqaures.push(sqaure)
        }
    }
    createBoard()
})