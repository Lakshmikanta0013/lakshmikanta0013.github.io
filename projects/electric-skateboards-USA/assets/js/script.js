'use strict';
const navMenuOpener = document.querySelector("[data-menu='open']"),
  navMenuCloser = document.querySelector("[data-menu='close']"),
  headerNavbar = document.querySelector('.header__navbar'),
  backdrop = document.querySelector('.backdrop'),
  openMenu = function () {
    headerNavbar.classList.add('open'),
      setTimeout(() => {
        backdrop.classList.remove('hidden');
      }, 500);
  },
  closeMenu = function () {
    headerNavbar.classList.remove('open'), backdrop.classList.add('hidden');
  };
navMenuOpener.addEventListener('click', openMenu),
  navMenuCloser.addEventListener('click', closeMenu),
  backdrop.addEventListener('click', closeMenu),
  document.addEventListener('keydown', function (e) {
    'Escape' === e.key &&
      headerNavbar.classList.contains('open') &&
      closeMenu();
  });
const header = document.querySelector('.header'),
  navHeight = headerNavbar.getBoundingClientRect().height,
  stickyNav = function (e) {
    const [t] = e;
    t.isIntersecting
      ? headerNavbar.closest('.container').classList.remove('nav-fixed')
      : headerNavbar.closest('.container').classList.add('nav-fixed');
  },
  headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 1,
    rootMargin: `-${navHeight}px`,
  });
headerObserver.observe(header),
  headerNavbar.addEventListener('click', function (e) {
    e.preventDefault();
    const t = e.target;
    if (t.classList.contains('nav-link')) {
      const e = t.getAttribute('href').slice(1);
      if (!e) return;
      const n = document.querySelector(`#${e}`);
      (n.style.scrollMarginTop = `${20 + navHeight}px`),
        n.scrollIntoView({ behaviour: 'smooth' });
    }
  });
const carousel = document.querySelector('.carousel'),
  slides = document.querySelectorAll('.slide'),
  btnLeft = document.querySelector('.btn-left'),
  btnRight = document.querySelector('.btn-right');
let curSlide = 0;
const maxSlide = slides.length,
  goToSlide = function (e) {
    slides.forEach(function (t, n) {
      t.style.transform = `translate(${100 * (n - e) - 50}% , -50%)`;
    });
  },
  nextSlide = function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++,
      goToSlide(curSlide);
  },
  prevSlide = function () {
    0 === curSlide ? (curSlide = maxSlide - 1) : curSlide--,
      goToSlide(curSlide);
  },
  init = function () {
    goToSlide(Math.trunc(maxSlide / 2));
  };
goToSlide(Math.trunc(maxSlide / 2)),
  btnLeft.addEventListener('click', prevSlide),
  btnRight.addEventListener('click', nextSlide);
//# sourceMappingURL=script.js.map
