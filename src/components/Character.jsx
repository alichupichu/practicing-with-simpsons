import React, { Component } from "react";

class Character extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.props.simpsons;
    const { charcater, charcaterDirection } = this.props;
    return (
      <p className="{simpson.character} {simpson.charcterDirection}">
        {simpson.character}
      </p>
    );
  }
}

export default Character;
