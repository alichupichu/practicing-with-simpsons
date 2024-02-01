import React, { Component } from "react";

class Character extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;
    const { charcaterDirection } = this.props;
    return (
      <p className="character {simpson.charcterDirection}">
        {simpson.character}
      </p>
    );
  }
}

export default Character;
