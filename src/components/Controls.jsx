import React, { Component } from "react";
import Like from "./Like";
import Bin from "./Bin";

class Controls extends Component {
  //state = {};
  render() {
    const { character, likeBtn, deleteBtn } = this.props;

    return (
      <div className="controls">
        <Like likeBtn={likeBtn} character={character} />
        <Bin deleteBtn={this.deleteBtn} character={character} />
      </div>
    );
  }
}

export default Controls;
