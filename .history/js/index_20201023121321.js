document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let sqaures = []
    let bombAamount = 20
    function createBoard(){
        const bombArray = Array(bombAamount).fill('bomb')
        const emptyArray = Array(width*width - bombAamount).fill('valid')
        const gameArray = emptyArray.concat(bombArray)
        for(let i = 0; i < width*width;i++){
            const sqaure = document.createElement('div')
            sqaure.setAttribute('id',i)
            grid.appendChild(sqaure)
            sqaures.push(sqaure)
        }
    }
    createBoard()
})