const displayList = document.querySelector('#displayList');
const bloglist = JSON.parse(localStorage.getItem("storage")) || [];

function renderBlogData() {
  for (let i = 0; i < bloglist.length; i++) {

    const post = bloglist[i];
    console.log(bloglist[i]);

    const postTitle = document.createElement('h2');
    const postContent = document.createElement('p');
    const postUser = document.createElement('h4');

    postTitle.textContent = post.title;
    postContent.textContent = post.content;
    postUser.textContent = ` created by ${post.username}`;

    displayList.append(
      postTitle, 
      postContent,
      postUser
    );
  };
};

renderBlogData();