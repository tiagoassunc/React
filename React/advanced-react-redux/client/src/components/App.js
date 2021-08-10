import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <Link href="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>click me!</button>
      <Link href="/">Navigate to Page one</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;

/* const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>click me!</button>
      <a href="/">Navigate to Page one</a> BAAAAD !
    </div>
  );
}; */
