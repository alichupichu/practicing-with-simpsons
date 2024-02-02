import React, { Component } from "react";

class Like extends Component {
  //state = {};

  render() {
    const { character, likeBtn } = this.props;

    return (
      <button className="like" onClick={() => likeBtn(character)}>
        Thumbs Up
      </button>
    );
  }
}

export default Like;
