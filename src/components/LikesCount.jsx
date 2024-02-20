import React, { Component } from "react";

class LikesCount extends Component {
  const { character, quote, image, characterDirection, like, count } =
      this.props.simpson;

  this.props.simpsons && this.props.simpsons.forEach((charcater) => {
    if(charcater.favourtie) count ++;
  });
  render() {
    return <p>Liked {count} times</p>;
  }
};

export default LikesCount;
