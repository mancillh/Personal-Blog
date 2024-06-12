// Blog.js includes the code for the post page only.
// Get reference to the DOM element
const displayList = document.querySelector('#displayList');

// Gets data from local storage and translates it from string back to array with JSON.parse
const bloglist = JSON.parse(localStorage.getItem("storage")) || [];

// This function will display the blog data on the web page when called
function renderBlogData() {
  for (let i = 0; i < bloglist.length; i++) {
    // initializes "post" variable which is defined here as the most recent index in the bloglist array. This index contains the three properties: username, title, and content.
    const post = bloglist[i];
    
    // these 4 elements are made on the fly, dynamically, as the user submits the form 
    const postTitle = document.createElement('h2');
    const postContent = document.createElement('p');
    const postUser = document.createElement('h4');
    const line = document.createElement('hr'); 
      line.setAttribute("width", "90%");
   
    // adds the title to the dynamically created h2 element
    postTitle.textContent = post.title;
    // adds the content to the dynamically created paragraph element
    postContent.textContent = post.content;
    // adds the username to the dynamically created h4 element
    postUser.textContent = ` created by ${post.username}`;
    
    // adds the title, content, username, and a horizontal line to the bottom of the collection of blog posts
    displayList.append(
      postTitle, 
      postContent,
      postUser,
      line
    );
  };
};

// calls the function to actually render the post on the page
renderBlogData();