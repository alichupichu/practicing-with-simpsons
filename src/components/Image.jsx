import React, { Component } from "react";

class Image extends Component {
  //state = {};
  render() {
    const { character, image } = this.props;

    return (
      <a href={`${image}`}>
        <img src={`${image}`} alt={`${character}`} />
      </a>
    );
  }
}

export default Image;
