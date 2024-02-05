import React, { Component } from "react";

class Character extends Component {
  //state = {};
  render() {
    const { character, characterDirection } = this.props;

    return (
      <h2 className={`${character} ${characterDirection}`}>{character}</h2>
    );
  }
}

export default Character;
