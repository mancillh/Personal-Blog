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

const displayList = document.querySelector('#displayList');
let bloglist = [];

function renderBlogData() {
   for (let i = 0; i < bloglist.length; i++) {
  const post = bloglist[i];
    
    const p = document.createElement('p');
    p.textContent = post;
    p.setAttribute('data-index', i);
    displayList.appendChild(p);
    };
};

function init() {
  // Get localStorage
  const saved = JSON.parse(localStorage.getItem("storage"));

  // If blog data is retrieved from localStorage, update the bloglist array 
  if (saved !== null) {
    bloglist = saved;
  }

  // This is a helper function that will render blog data to the DOM
  renderBlogData();
}

init();