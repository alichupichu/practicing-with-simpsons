import React, { Component } from "react";

class Bin extends Component {
  //state = {  }

  render() {
    const { character, deleteBtn } = this.props;

    //the function/call back lives in the app.js but we can invoque it here

    return (
      <button className="bin" onClick={() => deleteBtn(character)}>
        Bin
      </button>
    );
  }
}

export default Bin;
