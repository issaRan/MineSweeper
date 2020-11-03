document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let flag = 0
    let squares = []
    let isGamerOver = false
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
    createBoard()
    function click(square){
        let currentId = square.id
        if(isGameOver) return
        if(square.classList.contains('checked') || square.classList.contains('flag')){
            return
        }
        if(square.classList.contains('bomb')){
            alert('Game Over!')
        }else{
            let total = square.getAttribute('data')
            if(total != 0){
                square.classList.add('checked')
                square.innerHTML = total
                return
            }
            checkSquare(square,currentId)
        }
        square.classList.add('checked')

    }
    function checkSquare(square,currentId){
        const isLeftEdge = (currentId % width === 0)
        const isRightEdge = (currentId % width === width -1)
        setTimeout(()=>{
            if(currentId > && !isLeftEdge){
                const newId = squares[parseInt(currentId)-1].id
                const newSquare = document.getElementById(newId)
                click(newSquare,newId)

            }
        })
    }
})