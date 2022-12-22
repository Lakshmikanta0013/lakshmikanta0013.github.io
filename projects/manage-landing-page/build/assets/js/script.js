const pointListItems = document
  .querySelector('.point-list')
  .querySelectorAll('.point-list-items');


const ajax = new XMLHttpRequest();
ajax.open('GET', './assets/img/SVG/sprite.svg', true);
ajax.send();
ajax.onload = function () {
  const div = document.createElement('div');
  div.className = 'svgSprite';
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
};

pointListItems.forEach((item, i) => {
  const headingNum = item.querySelector('h3').querySelector('.item-num');
  headingNum.innerText = `0${i + 1}`;
});
//# sourceMappingURL=script.js.map
