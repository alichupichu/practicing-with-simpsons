import React, { Component } from "react";

class Search extends Component {
  //state = {  }
  render() {
    return (
      <>
        <input
          placeholder="Search for a character here"
          className="search"
          formMethod="submit"
        ></input>
        <button>
          <svg></svg>
        </button>
      </>
    );
  }
}

export default Search;
