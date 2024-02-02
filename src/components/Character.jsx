import React, { Component } from "react";

class Character extends Component {
  //state = {};
  render() {
    const { character, characterDirection } = this.props;

    return <p className={`${character} ${characterDirection}`}>{character}</p>;
  }
}

export default Character;
