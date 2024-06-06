const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const addBlogEntryButton = document.querySelector('#add-entry');
const msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

addBlogEntryButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create blogData object from submission of blog post data
  const blogData = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  if (blogData.userName === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (blogData.title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (blogData.content === '') {
    displayMessage('error', 'Blog Content cannot be blank');
  } else {
    displayMessage('success', 'Thanks for adding your awesome blog post!')};

  // set new blog post data to local storage
  localStorage.setItem('blogData', JSON.stringify(blogData));
  console.log(localStorage);
  
  //redirect to blog Homepage
  location.href = 'blog.html';
});


 