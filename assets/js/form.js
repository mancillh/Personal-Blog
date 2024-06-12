// Form.js includes the code for the form only.
// Get references to the DOM elements
const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const addBlogEntryButton = document.querySelector('#add-entry');
const msgDiv = document.querySelector('#msg');

// this function displays error messages if the user does not complete the form
 function displayMessage(type, message) {
   msgDiv.textContent = message;
   msgDiv.setAttribute('class', type);
 };

// retrieves previous posts from local storage or, if there are no posts created yet, initializes an empty array
const bloglist = JSON.parse(localStorage.getItem("storage")) || [];

// series of events initiated at click of "Add Blog Entry" button
addBlogEntryButton.addEventListener('click', function (event) {
  // prevents default behavior of refreshing page on form submission
  event.preventDefault();
  
  // creates blogData object from submission of blog post data
  let blogData = {
    username: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // throws error if user leaves a form field blank; if the user completes the form, their entry is pushed into storage to be displayed on the post page
  if (blogData.username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (blogData.title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (blogData.content === '') {
    displayMessage('error', 'Blog Content cannot be blank');
  } else {

  // stores username, title, and content in an array
  bloglist.push(blogData);
    
  // pushes new blog post data (from completion of form) to local storage as a string
  localStorage.setItem("storage", JSON.stringify(bloglist));

  // redirect user to blog post page
  location.href = 'blog.html';
  }
});



 