import React, { Component } from "react";

class Search extends Component {
  //state = {  }
  render() {
    const [...simpsons] = this.props;
    const { simpson } = this.props;
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
