'use strict';

const submitBtn = document.querySelector('.rating-card > button');
const ratingCard = document.querySelector('.rating-card');
const thanksCard = document.querySelector('.thanks-card');

let ratingList = document.querySelectorAll('.rating ul li button');
const selectedRating = document.querySelector('.selected-rating span');

let rating = 0;

for (let i = 0; i < ratingList.length; i++) {
  ratingList[i].addEventListener('click', function () {
    rating = i + 1;
  });
}

submitBtn.addEventListener('click', function () {
  ratingCard.classList.add('visually-hidden');
  thanksCard.classList.remove('visually-hidden');
  selectedRating.textContent = rating;
});
