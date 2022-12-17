"use strict";

const shareBtn = document.querySelector('.share-btn');
const socialLinks = document.querySelector('.social-links');
const backdrop = document.querySelector('.backdrop');
shareBtn.addEventListener('click', () => {
  socialLinks.classList.toggle('active');
  backdrop.classList.toggle('active');
  shareBtn.classList.toggle('active');
});
backdrop.addEventListener('click', () => {
  socialLinks.classList.remove('active');
  backdrop.classList.remove('active');
  shareBtn.classList.remove('active');
});
//# sourceMappingURL=script.js.map