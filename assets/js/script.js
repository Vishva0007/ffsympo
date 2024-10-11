'use strict';



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

// Query for the navbar, the toggler button, and all navigation links
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

// Function to toggle the navbar and toggle button
const toggleNav = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

// Add click event to the nav toggle button
navToggler.addEventListener("click", toggleNav);

// Function to close the navbar when a link is clicked
const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

// Add click event to each navigation link
navLinks.forEach(link => {
  link.addEventListener("click", navClose);
});





/**
 * HEADER and BACK TOP BTN
 * header and back top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */

// const cursor = document.querySelector("[data-cursor]");
// const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

// const cursorMove = function (event) {
//   cursor.style.top = `${event.clientY}px`;
//   cursor.style.left = `${event.clientX}px`;
// }

// window.addEventListener("mousemove", cursorMove);

// addEventOnElements(hoverElements, "mouseover", function () {
//   cursor.classList.add("hovered");
// });

// addEventOnElements(hoverElements, "mouseout", function () {
//   cursor.classList.remove("hovered");
// });
const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;

  // Update trail position
  const trail = cursor.querySelector('.cursor::before');
  if (trail) {
    trail.style.top = `${event.clientY}px`;
    trail.style.left = `${event.clientX}px`;
  }
};

window.addEventListener("mousemove", cursorMove);

const addEventOnElements = (elements, event, callback) => {
  elements.forEach(element => {
    element.addEventListener(event, callback);
  });
};

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});


