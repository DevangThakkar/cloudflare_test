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
        <div class="field" class="norm-font-size">
          <label class="justify" htmlFor="title">title       </label>
          <input
            type="text"
            name="title"
           ref={(input) => this.title = input}
          />
        </div>
        <div class="field" class="norm-font-size">
          <label class="justify" htmlFor="username">username    </label>
          <input
            type="text"
            name="username"
            ref={(input) => this.username = input}
          />
        </div>
        <div class="large-field" class="field" class="norm-font-size">
          <label class="justify" htmlFor="content">content     </label>
          <textarea
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