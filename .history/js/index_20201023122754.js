document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    let width = 10
    let sqaures = []
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
            sqaures.push(sqaure)
        }
    }
    for(let i = 0 ; i < sqaures.length;i++){
        let total = 0;
        const isLeftEdge = i % width === 0 
        const isRightEdage = (i === width-1)
        if(sqaures[i].classList.contains('vaild')){
            if(i > 0 && !isLeftEdge && sqaures[i-1].classList.contains('bomb')){
                total++
            }
            if(i > 9 && !isRightEdage && sqaures[i+1-width].classList.contains('bomb')){
                total++;
            }
            sqaures[i].setAttribute('data',total)
            console.log(sqaures[i])
        }
    }
    createBoard()
})