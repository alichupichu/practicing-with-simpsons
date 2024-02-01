import React, { Component } from "react";

class Bin extends Component {
  //state = {  }

  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;

    let binBtn = () => {
      let binned = simpsons.findIndex(
        (simpson) => simpson.charcater === charcater
      );
      let binnedCharacter = simpson.splice(binned);
    };
    return (
      <button className="bin" onClick={this.binBtn(simpson.charcater)}>
        Bin
      </button>
    );
  }
}

export default Bin;
