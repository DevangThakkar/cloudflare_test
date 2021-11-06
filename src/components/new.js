import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const html = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>New Post</title>
  </head>

  <body>
    <div>
      <div>
        <h1>new post</h1>
        <div>
          <input type="text" name="title" id="title" placeholder="add your title" required></input>
        </div>
        <div>
          <input type="text" name="username" id="username" placeholder="add your username" required></input>
        </div>
        <div>
          <input type="text" name="content" id="content" placeholder="add your content" required></input>
        </div>
        <div>
          <button id="create" type="submit">Create</button>
        </div>
      </div>
    </div>
  </body>

  <script>
    window.title = document.getElementById('title').value
    window.username = document.getElementById('username').value
    window.content = document.getElementById('content').value

     var createPost = function() {
      fetch("https://router_template.devangt.workers.dev/posts", { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ title: window.title, username: window.username, content: window.content }) })
    }

    document.querySelector("#create").addEventListener('click', createPost)
  </script>
</html>
`

// const New = () => {
//   return (html);
// };

// const New = () => {
//   const [new, setNew] = useState([]);

//   useEffect(() => {
//     const getNew = async () => {
//       const resp = await fetch(
//         "https://router_template.devangt.workers.dev/posts"
//       );
//       const postsResp = await resp.json();
//       setPosts(postsResp);
//     };

//     getPosts();
//   }, []);

//   let url="https://www.devangthakkar.com";

//   return (
//     <div>
//       <h1>flarebook</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <h3>written by {post.username}</h3>
//           <p>{post.content}</p>
//         </div>
//       ))}
//       <h4>made by <a href={url}>devang thakkar</a></h4>
//     </div>
//   );
// };

export default class New extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: '', username: '', content: ''};
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('Your username is: ' + this.title.value);
  };

  render() {
   return (
     <React.Fragment>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="title">title</label>
         <input
           type="text"
           name="title"
           ref={(input) => this.title = input}
         />
         <label htmlFor="username">username</label>
         <input
           type="text"
           name="username"
           ref={(input) => this.username = input}
         />
         <label htmlFor="content">content</label>
         <input
           type="textarea"
           name="content"
           ref={(input) => this.content = input}
         />
       </form>

     </React.Fragment>
   );
 }
}