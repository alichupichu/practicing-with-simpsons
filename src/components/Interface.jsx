import React, { Component } from "react";
import Search from "./Search";
import Personnage from "./Personnage";
import LikesCount from "./LikesCount";

class Interface extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.props.simpsons;
    const { charcater } = this.props;

    return (
      <>
        <h1 className="title">The Simpsons</h1>
        <div className="sub-header">
          <Search /> <LikesCount />
        </div>
        <div className="list">
          <Personnage {...simpsons} />
        </div>
      </>
    );
  }
}

export default Interface;
