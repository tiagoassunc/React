import React, { useState } from "react";

// Functional components
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState(""); // state

  const onInputChange = (e) => {
    setTerm(e.target.value); // setState
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// Class based components
/* class SearchBar extends React.Component {
  state = { term: "" }; // useState - term

  onInputChange = (e) => {
    this.setState({ term: e.target.value }); // useState - setTerm
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
} 

export default SearchBar; */
