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
        <h2 style="text-align:center;">Check it out <Link to="/">here</Link>. It might take a few seconds to update.</h2>
        <h2 style="text-align:center;">Alternatively, create a new post <Link to="/">here</Link>.</h2>
      </div>
   );
 }
}