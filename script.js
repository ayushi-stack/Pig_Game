'use strict';
let sum1 = 0;
let sum2 = 0;
let scoreFinal1 = 0;
let scoreFinal2 = 0;
let player = 1;
const calc = () => {
  const num1 = Math.trunc(Math.random() * 6) + 1;
  console.log(num1);
  document.querySelector('.dice').src = `dice-${num1}.png`;
  if (player === 1 && scoreFinal1 <= 20) {
    if (num1 == 1) {
      sum1 = 0;
      document.querySelector('#current--0').textContent = 0;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
      player = 2;
    } else {
      sum1 = sum1 + num1;
      document.getElementById('current--0').textContent = sum1;
    }
  } else {
    if (scoreFinal2 <= 20) {
      const num2 = Math.trunc(Math.random() * 6) + 1;
      document.querySelector('.dice').src = `dice-${num2}.png`;
      if (num2 == 1) {
        sum2 = 0;

        document.querySelector('#current--1').textContent = 0;
        player = 1;
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
      } else {
        sum2 = sum2 + num2;
        const player2 = (document.querySelector(
          '#current--1'
        ).textContent = sum2);
      }
    }
  }
};
const calcScore = function () {
  if (player == 1) {
    scoreFinal1 = scoreFinal1 + Number(sum1);
    document.querySelector('#score--0').textContent = Number(scoreFinal1);
    document.querySelector('#current--0').textContent = 0;
    sum1 = 0;
    player = 2;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else {
    scoreFinal2 = scoreFinal2 + Number(sum2);
    document.querySelector('#score--1').textContent = Number(scoreFinal2);
    document.querySelector('#current--1').textContent = 0;
    sum2 = 0;
    player = 1;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
  if (scoreFinal1 >= 20) {
    console.log('1 wins');
    document.querySelector('.player--0').classList.add('player--winner');
  } else if (scoreFinal2 >= 20) {
    console.log('2 wins');
    document.querySelector('.player--1').classList.add('player--winner');
  }
};
const btn_roll = document
  .querySelector('.btn--roll')
  .addEventListener('click', calc);
const score = document
  .querySelector('.btn--hold')
  .addEventListener('click', calcScore);
