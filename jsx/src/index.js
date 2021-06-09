// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Enable reloading
if (module.hot) {
  module.hot.accept();
}

// Create a react component
const App = () => {
  const buttonText = { text: "click me" };
  const labelText = "Enter name:";

  return (
    <div>
      {/* <label class="label" for="name"> */}
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* {Inline Styling with JSX}
      <button style= "background-color: blue; color: white"> */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
