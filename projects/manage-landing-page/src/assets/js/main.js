pointListItems.forEach((item, i) => {
  const headingNum = item.querySelector('h3').querySelector('.item-num');
  headingNum.innerText = `0${i + 1}`;
});
