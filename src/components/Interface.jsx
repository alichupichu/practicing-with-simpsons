import React, { Component } from "react";
import Search from "./Search";
import Personnage from "./Personnage";
import LikesCount from "./LikesCount";

class Interface extends Component {
  state = {};
  render() {
    const { simpsons, search, like, bin } = this.props;
    return (
      <>
        <h1 className="title">The Simpsons</h1>
        <div className="sub-header">
          {" "}
          <Search /> <LikesCount />{" "}
        </div>
        <div className="list">
          {" "}
          <Personnage />
        </div>
      </>
    );
  }
}

export default Interface;
