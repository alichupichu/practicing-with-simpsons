import React, { Component } from "react";
import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Personnage extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;
    return (
      <>
        <Character />
        <Quote />
        <Image />
        <Controls />
      </>
    );
  }
}

export default Personnage;
