import React, { Component } from "react";
import Like from "./Like";
import Bin from "./Bin";

class Controls extends Component {
  //state = {};
  render() {
    const { character, likeBtn } = this.props;

    return (
      <div className="controls">
        <Like likeBtn={likeBtn} character={character} />
        {/* <Bin /> */}
      </div>
    );
  }
}

export default Controls;
