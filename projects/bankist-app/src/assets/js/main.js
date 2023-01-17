btnsOpenModal.forEach((modal) => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('visually-hidden')) {
    closeModal();
  }
});

// +++++++++ Smooth-Scrolling +++++++++++
btnScrollTo.addEventListener('click', function () {
  const slcords = section1.getBoundingClientRect();
  // console.log(slcords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(
  //   slcords.left + window.pageXOffset,
  //   slcords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: slcords.left + window.pageXOffset,
  //   top: slcords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// =========== Back-To-Top ===============
document
  .querySelector('.back-to-top')
  .addEventListener('click', () =>
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' })
  );

// +++++++++ Page Navigation +++++++++++

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// ====== using {event delegation} method ========
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const id = target.getAttribute('href');
    document
      .querySelector(id)
      .scrollIntoView({ behavior: 'auto', block: 'start' });
  }
});

// ++++++++++++++++ DOM Traversing ++++++++
// const h1 = document.querySelector('h1');

// going downward child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.firstElementChild);

// going upword parent

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// console.log(h1.closest('.header'));
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// going sideways: sblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.backgroundColor = 'yellow';
// });

// ========== Creating tabed content =============

tabConstainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  // this is use to ignore any value(spacilly 'null') other thand tabs element
  if (!clicked) return;

  // Active tab
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  clicked.classList.toggle('operations__tab--active');

  //  Activate content area
  tabsContent.forEach((e) => {
    e.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ========== Menu Fade Animation =============
/*
const handelHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblinks = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblinks.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function (e) {
  handelHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handelHover(e, 1);
});
*/

const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblinks = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblinks.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));

// ========== Sticky Navbar =============
/*
const initialCords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  console.log(window.screenY);
  if (window.scrollY >= initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

//====== Using Intersection Observer API

/*
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ========= Revele elements on scroll ===========
const sections = document.querySelectorAll('.section');

const reveleSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  // close the observation when all are finished
  observer.unobserve(entry.target);
};

const sectionObsever = new IntersectionObserver(reveleSection, {
  root: null,
  threshold: 0.2,
});
sections.forEach((s) => {
  sectionObsever.observe(s);
  s.classList.add('section--hidden');
});

//============ Lazy loading Images ===============

const targetImgs = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.8,
  // rootMargin: '200px',
});

targetImgs.forEach((img) => imgObserver.observe(img));

//============== Carousel Slider =================

const carouselSlider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnleft = document.querySelector('.slider__btn--left');
  const btnright = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // ==== Functions Creation
  const gotToSlide = function (slideNo) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slideNo) * 100}%)`;
    });
  };
  const nextSlide = function () {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
    gotToSlide(curSlide);
    activateDots(curSlide);
  };
  const preSlide = function () {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
    gotToSlide(curSlide);
    activateDots(curSlide);
  };
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDots = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => {
      dot.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // initialize
  const init = function () {
    createDots();
    activateDots(0);
    gotToSlide(0);
  };
  init();

  // Event handel
  btnright.addEventListener('click', nextSlide);
  btnleft.addEventListener('click', preSlide);

  // keydown event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') preSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('dots__dot')) {
      const { slide } = target.dataset;
      gotToSlide(slide);
      activateDots(slide);
    }
  });
};
carouselSlider();

// =================== DO-NOT-UER-CODE =================
/*
//  this event get triggered when html DOM tree and script tag are fully loded before any other animation get loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page full Loaded', e);
});

// prevent user from {reloading} the window before any apecific task.
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = 'Are you sure you want to exit?';
});
*/
