import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default class New extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: '', username: '', content: ''};
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Your username is: ' + this.title.value);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
           ref={(input) => this.title = input}
          />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            ref={(input) => this.username = input}
          />
        </div>
        <div class="large-field">
          <label htmlFor="content">content</label>
          <input
            type="textarea"
            name="content"
            ref={(input) => this.content = input}
          />
        </div>
        <div>
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