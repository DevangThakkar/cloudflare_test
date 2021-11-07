import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default class Submitted extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>you created a post!</h1>
        <h2>Check it out <Link class="italics" to="/">here</Link>. Note that it might take a bit for the posts to update. Alternatively, you can create a new post <Link class="italics" to="/new">here</Link>.</h2>
      </div>
   );
 }
}