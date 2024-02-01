import React, { Component } from "react";
import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Personnage extends Component {
  state = {};
  render() {
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
