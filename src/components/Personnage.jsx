import React, { Component } from "react";
import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Personnage extends Component {
  //state = {};
  render() {
    console.log(this.props);
    const [...simpsons] = this.props.simpsons;
    const { simpson, charcater, quote, image, deletePersonnage } = this.props;
    return (
      <div key={simpson.character}>
        <Character />
        <Quote />
        <Image />
        <Controls />
      </div>
    );
  }
}

export default Personnage;
