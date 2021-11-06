import { Router } from "@reach/router";

import Posts from './components/posts'
import New from './components/new'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <New path="/new" />
    </Router>
  );
}

export default App;