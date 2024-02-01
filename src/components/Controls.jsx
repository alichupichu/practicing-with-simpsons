import React, { Component } from "react";
import Like from "./Like";
import Bin from "./Bin";

class Controls extends Component {
  //state = {};
  render() {
    return (
      <div className="controls">
        <Like />
        <Bin />
      </div>
    );
  }
}

export default Controls;
