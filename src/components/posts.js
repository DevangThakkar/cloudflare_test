import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://router_template.devangt.workers.dev/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  let url="https://www.devangthakkar.com";

  return (
    <div>
      <h1>flarebook</h1>
      <h2 class="right-aligned">create a post <Link to="/new">here</Link></h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>written by {post.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      <h4>made by <a href={url}>devang thakkar</a></h4>
    </div>
  );
};

export default Posts;