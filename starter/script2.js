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
score0EL.textContent = 0;
score1EL.textContent = 0;
let scoretwo = 0;
let score = 0;
diceEL.classList.add('hidden');
btnRoll.addEventListener("click", function() {
    let number = Math.trunc(Math.random() * 6) + 1
    if (number === 1) {
        if (player1.classList.length === 3) {
            player1.classList.remove("player--active");
            player0.classList.add("player--active");
            scoretwo = 0;
            current1.textContent = scoretwo;
        } else {
            active.classList.remove("player--active");
            player1.classList.add("player--active");
            score = 0;
            current0.textContent = score;
        }

    } else {
        if (player1.classList.length === 3) {
            scoretwo = scoretwo + number;
            current1.textContent = scoretwo;
        } else {
            score = score + number;
            current0.textContent = score;
        }
    }
    diceEL.src = `dice-${number}.png`;
    diceEL.classList.remove('hidden');
})
btnHold.addEventListener("click", function() {
    score0EL.textContent = score;
    score1EL.textContent = scoretwo;
    player1.classList.toggle("player--active");
    player0.classList.toggle("player--active");
})
btnNew.addEventListener("click", function() {
        diceEL.classList.add('hidden');
        current0.textContent = 0;
        current1.textContent = 0;
        score0EL.textContent = 0;
        score1EL.textContent = 0;
        active.classList.remove("player--active");
        player0
    })
    // console.log(number)

// [0].getAttribute("class")