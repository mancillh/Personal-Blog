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

  // create user object from submission of blog post data
  const user = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  if (user.userName === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (user.title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (user.content === '') {
    displayMessage('error', 'Blog Content cannot be blank');
  } else {
    displayMessage('success', 'Thanks for adding your awesome blog post!')};

  // set new blog post data to local storage
  localStorage.setItem('user', JSON.stringify(user));
  console.log(localStorage);
  
  //redirect to blog Homepage
  location.href = 'blog.html';
});


 