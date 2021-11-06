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

const New = () => {
  return (html);
};

export default New;