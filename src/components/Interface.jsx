import React, { Component } from "react";
import Search from "./Search";
import Personnage from "./Personnage";
import LikesCount from "./LikesCount";

class Interface extends Component {
  //state = {};
  render() {
    console.log(this.props);
    // const { simpson } = this.props;
    // const [...simpsons] = this.props.simpsons;
    // const { charcater } = this.props;

    return this.props.simpsons.map((simpson) => {
      return <Personnage simpsons={simpson.character} />;
    });
  }
}

export default Interface;
