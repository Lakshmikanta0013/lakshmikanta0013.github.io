'use strict';

let secretNumber = Math.round(Math.random() * 20);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberBackgroundColor = function (color) {
  document.querySelector('.number').style.backgroundColor = color;
};

let scoreText = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🛑 Not a number! Try again 🫣');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    numberBackgroundColor('#bbffbb');
    displayMessage('🥳 Correct guess... You WIN!');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
  } else if (guess > secretNumber) {
    displayMessage(' 📈 Too high ! try low.');
    numberBackgroundColor('#ff5555');
    score -= 1;
    scoreText(score);
  } else if (guess < secretNumber) {
    displayMessage('📉 Too low! try high.');
    numberBackgroundColor('#ffaaaa');
    score -= 1;
    scoreText(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.round(Math.random() * 20);
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.cssText =
    'background-color: #fff; width = 15rem';
});
