import React from "react";
import ReactDOM from "react-dom";

// Enable reloading
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.error(err)
    );

    return <div> Hi there!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
