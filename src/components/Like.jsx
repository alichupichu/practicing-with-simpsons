import React, { Component } from "react";

class Like extends Component {
  //state = {};

  render() {
    const { character, likeBTn } = this.props;

    return (
      <button className="like" onClick={this.props.likeBTn(character)}>
        Thumbs Up
      </button>
    );
  }
}

export default Like;
