import React, { Component } from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.search}>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
