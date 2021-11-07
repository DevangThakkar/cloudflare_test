import { Router } from "@reach/router";

import Posts from './components/posts'
import New from './components/new'
import Submitted from './components/submitted'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <New path="/new" />
      <Submitted path="/submitted" />
    </Router>
  );
}

export default App;