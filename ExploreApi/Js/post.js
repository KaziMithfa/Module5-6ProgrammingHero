function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const PostDiv = document.createElement("div");
    console.log(post);
    PostDiv.classList.add("post");
    PostDiv.innerHTML = `
    
    <h4>User-${post.id}</h4>
    <h5>Post: ${post.name}</h5>
    <p>Post Description</p>


    `;

    postContainer.appendChild(PostDiv);
  }
}

loadPosts();
