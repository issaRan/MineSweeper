document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let squares = []
    let bombAamount = 20
    function createBoard(){
        const bombArray = Array(bombAamount).fill('bomb')
        const emptyArray = Array(width*width - bombAamount).fill('valid')
        const gameArray = emptyArray.concat(bombArray)
        const shuffledArray = gameArray.sort(()=> Math.random() -0.5)
        for(let i = 0; i < width*width;i++){
            const sqaure = document.createElement('div')
            sqaure.setAttribute('id',i)
            sqaure.classList.add(shuffledArray[i])
            grid.appendChild(sqaure)
            squares.push(sqaure)
            sqaure.addEventListener('click',(e)=>{
                click(sqaure)
            })
        }
        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width -1)
      
            if (squares[i].classList.contains('valid')) {
              if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
              if (i > 9 && !isRightEdge && squares[i + 1 -width].classList.contains('bomb')) total ++
              if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
              if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
              if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
              if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
              if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
              if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
              squares[i].setAttribute('data', total)
            }
        }
    }
    function click(square){
        if(square.contains('bomb')){
            alert('Game Over!')
        }
    }
    createBoard()
})