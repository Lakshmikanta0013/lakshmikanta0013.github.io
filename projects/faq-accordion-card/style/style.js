'use strict';

const listHeader = document.querySelectorAll('.list__heading');

const listParagraph = document.querySelectorAll('.list__paragraph');

for (let i = 0; i < listHeader.length; i++) {
  listHeader[i].addEventListener('click', function () {
    listHeader[i].classList.toggle('open');
    listParagraph[i].classList.toggle('visually-hidden');
  });
}
