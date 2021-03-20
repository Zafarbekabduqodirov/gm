'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const current0EL = document.querySelector('#current--0')
const current1EL = document.querySelector('#current--1')
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
let activePlayer = 0;
let currentScore = 0;
const scores = [0, 0]

score0EL.textContent = 0;
score1EL.textContent = 0
diceEL.classList.add("hidden")

btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    if (dice !== 1) {
        currentScore = currentScore + dice;
        console.log(currentScore);
        // current0EL.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0EL.classList.toggle('player--active')
        player1EL.classList.toggle('player--active')
    }
})
btnHold.addEventListener('click', function() {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //    document.querySelector(`.player--${activePlayer}`).classList.toggler("player--active");
    if (document.getElementById(`score--${activePlayer}`).textContent >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.TOGGLER("player--active");
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    //    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
})
console.log(currentScore);