import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Enable reloading
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  //  Initial state object
  state = { lat: null, errorMessage: "" };

  //  Initial data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Helper function -  Define render n
  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request!" />;
  }

  // rendering!
  render() {
    return <div className="something">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
