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

  return (
    <div>
      <h1>flarebook</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>written by {post.username}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    <div>made by <a href="https://www.devangthakkar.com">devang</a></div>
  );
};

export default Posts;