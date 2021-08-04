const cards = document.querySelectorAll('.memory-card')
let hasFlippedCard = false
let lockBoard = false
let firstCard, secondCard

function flipCard() {
    if (lockBoard) return
    // to prevent the first clicked card from getting stuck flipped, 
    // we need to make sure the current clicked card is not the first clicked card
    // if it is, then we return 
    if (this === firstCard) return

    this.classList.add('flip')

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true
        firstCard = this

        return 
    } 
    // second click 
    hasFlippedCard = false
    secondCard = this

    checkForMatch()   
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework 
    
    isMatch ? disableCards() : unflipCards()
}

function disableCards() {
    // if the cards matched, we remove event listener so they no longer respond to click
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard
}

function unflipCards(){
    // if cards don't match, we lock the board to prevent other moves 
    lockBoard = true
    // we set a timer before flipping cards back over
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        // we unlock the board again for new moves
        resetBoard()
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

// wrapped in parenthesis to immediately call the function expression right after it's defined
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.getElementsByClassName.order = randomPos
    })
})()

cards.forEach(card => card.addEventListener('click', flipCard))