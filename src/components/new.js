import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default class New extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: '', username: '', content: ''};
  }

  handleSubmit = event => {
    event.preventDefault();
    (async () => {
      const rawResponse = await fetch("https://router_template.devangt.workers.dev/posts", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: this.title.value, username: this.username.value, content: this.content.value})
      });
      const content = await rawResponse.json();

      console.log(content);
      console.log(JSON.stringify({title: this.title.value, username: this.username.value, content: this.content.value}));
    })();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>write something</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
        <div class="field">
          <label class="justify" htmlFor="title">title       </label>
          <input
            required
            type="text"
            name="title"
           ref={(input) => this.title = input}
          />
        </div>
        <div class="field">
          <label class="justify" htmlFor="username">username    </label>
          <input
            required
            type="text"
            name="username"
            ref={(input) => this.username = input}
          />
        </div>
        <div class="large-field field">
          <label class="justify" htmlFor="content">content     </label>
          <textarea
            required
            type="textarea"
            name="content"
            ref={(input) => this.content = input}
          />
        </div>
        <div class="field">
          <button
            type="submit" 
            className="btn btn-primary">Post
          </button>
        </div>
       </form>
     </React.Fragment>
   );
 }
}