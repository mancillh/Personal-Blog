const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const addBlogEntryButton = document.querySelector('#add-entry');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create user object from submission
  const user = {
    userName: userNameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem('user', JSON.stringify(user));
});
