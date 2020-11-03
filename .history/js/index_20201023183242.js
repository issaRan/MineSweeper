document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let flag = 10
    let startClicking = false
    let squares = []
    let isGameOver = false
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
            sqaure.oncontextmenu = function(e){
                e.preventDefault()
                addFlag(sqaure)
            }
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
        if(!startClicking) setCountUpTimer()
        if(isGameOver) return
        if(square.classList.contains('checked') || square.classList.contains('flag')){
            return
        }
        if(square.classList.contains('bomb')){
            gameOver(square)
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
            if (currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1].id
                //const newId = parseInt(currentId) - 1   ....refactor
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId > 9 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1 -width].id
                //const newId = parseInt(currentId) +1 -width   ....refactor
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId > 10) {
                const newId = squares[parseInt(currentId -width)].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId > 11 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1 -width].id
    
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId < 98 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId < 90 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1 +width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId < 88 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1 +width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
              if (currentId < 89) {
                const newId = squares[parseInt(currentId) +width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
              }
        },10)
    }
    function gameOver(square){
        console.log("Boom !")
        isGameOver = true
        squares.forEach(square=> {
            if(square.classList.contains('bomb')){
                square.innerHTML = '💣'
            }
        })
    }
    function addFlag(square){
        if(isGameOver) return
        if(!square.classList.contains('checked') && (flag >= 0)) {
            var c = document.querySelector('.numOfFlag')
            if(!square.classList.contains('flag')){
                square.classList.add('flag')
                square.innerHTML = ' 🚩'
                checkForWin()
                flag--;
                c.textContent = flag
            }else{
                square.classList.remove('flag')
                square.innerHTML = ''
                flag++;
                c.textContent = flag
            }
        }
    }
    function checkForWin(){
        let matches = 0
        for(let i = 0; i < squares.length;i++){
            if(squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')){
                matches++
            }
            if(matches == bombAamount){
                isGameOver = true
                console.log('You Win !')
            }
        }
    }
    function setCountUpTimer(){
        var minutesLabel = document.querySelector('.minutes');
        var secondsLabel = document.getElementById('.seconds');
        var totalSeconds = 0;
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
})