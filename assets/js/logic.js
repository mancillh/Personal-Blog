// Logic.js includes the code for the light mode/dark mode toggle and the back button

// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

// Access back button
const back = document.querySelector('.backBtn');

// Redirect to form landing page on back button click
backBtn.addEventListener('click', function (event) {
  event.preventDefault();

  location.href = 'index.html';
});