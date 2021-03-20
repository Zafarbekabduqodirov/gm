'use strict';

const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");
let active = document.querySelector(".player--active");
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
let remove = document.querySelector(".player--winner");
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
btnHold.addEventListener('click', function() {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
    if (document.getElementById(`score--${activePlayer}`).textContent >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        btnRoll.classList.add("btn-roll");
        btnHold.classList.add("btn-hold");
        btnHold.classList.remove("btn--hold");
        diceEL.classList.add('hidden');
        btnRoll.addEventListener("click", function() {
            btnRoll.classList.remove("btn--roll");
            diceEL.classList.add('hidden');
            currentScore * 0;
            scores[0] * 0;
            scores[1] * 0;
        })
        btnHold.addEventListener("click", function() {
            btnHold.classList.remove("btn--roll");
        })

    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
})
btnRoll.addEventListener("click", function() {
    let number = Math.trunc(Math.random() * 6) + 1
    if (number !== 1) {
        currentScore = currentScore + number;
        console.log(currentScore);
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.classList.toggle("player--active");
        player0.classList.toggle("player--active");

    }
    diceEL.src = `dice-${number}.png`;
    diceEL.classList.remove('hidden');
})

btnNew.addEventListener("click", function() {
    diceEL.classList.add('hidden');
    current0.textContent = 0;
    current1.textContent = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;
    player0.classList.add("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player1.classList.remove("player--active");
    activePlayer = 0;
})

for (let i = 0; i > `score${activePlayer}EL`; i++) {
    if (i >= 100) break
}
// [0].getAttribute("class")