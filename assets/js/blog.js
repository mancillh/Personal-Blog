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

// This function is being called below and will run when the page loads.
function init() {
  // Get stored blog post data from localStorage
  const storedBlogData = JSON.parse(localStorage.getItem('blogData'));
console.log(storedBlogData);
  // Render list of blog data
  renderBlogData();
  if (storedBlogData === '') {
    console.log("There are no blogs to display.");
    return;
  } else {
.append('<li>${}</li>')
  }
};

// Calls init to retrieve data and render it to the page on load
init();