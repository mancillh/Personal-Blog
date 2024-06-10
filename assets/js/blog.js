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

let blogInfoArray = [];
// This function is being called below and will run when the page loads.
function init() {
  // If blog data was retrieved from localStorage, update the array to include it. Otherwise, create a pop up alerting user no posts are available.
  const storedBlogData = JSON.parse(localStorage.getItem('blogData'));
  if (storedBlogData) {
    blogInfoArray.push(storedBlogData);
  } else {
    alert("There are no blog posts at the moment. Check back later!");
  }
};

const bloglist = document.querySelector('#bloglist');

function renderBlogData() {
  bloglist.innerHTML = '';

  for (let i = 0; i < blogInfoArray.length; i++) {
    let post = blogInfoArray[i];
    const li = document.createElement('li');
    li.textContent = `Username: ${post.username} Title: ${post.title} Content: ${post.content}`;
    li.setAttribute('data-index', i);
    bloglist.appendChild(li);
    }
  };
  
init();
renderBlogData();
