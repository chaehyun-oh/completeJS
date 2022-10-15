'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {

  const scloords = section1.getBoundingClientRect();
  console.log(scloords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //  scrolling
  // window.scrollTo(
  //   scloords.left + window.pageXOffset,
  //   scloords.top + window.pageYOffset
  //   );

  // window.scrollTo({
  //   left: scloords.left + window.pageXOffset,
  //   top: scloords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });


  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent elemnt
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//  Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target;
  console.log(clicked);
});

//  not use
// tabs.forEach(t => t.addEventListener('click', () => console.log('tap')));



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/*

//  selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});
//  Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//  Attribues
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute('alt'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//  Data attributes
console.log(logo.dataset.versionNumber);

//  Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use
logo.className = 'jonas'
*/

/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// oldschool way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading')
// };
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  
  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  
});

document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);

}, true);


const h1 = document.querySelector('h1');

//  Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
//  that would work no matter how deep these child elements would be inside of the h1 element.
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//  Going upwartds :parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


//  Going sideway: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

*/
