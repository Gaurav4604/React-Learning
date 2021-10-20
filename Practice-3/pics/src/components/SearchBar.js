import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    
    // function binding is done, to resolve scoping issues
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  // arrow function allows the binding to be done by itself
  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);
    
    // this is reference to parent component function
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* this is a function passed as prop via function reference */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
