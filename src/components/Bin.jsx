import React, { Component } from "react";

class Bin extends Component {
  //state = {  }

  render() {
    const { simpson } = this.props;

    binBtn = () => {
      let binned = simpsons.findIndex(
        (simpson) => simpson.charcater === charcater
      );
      let binnedCharacter = simpson.splice(indexOf);
    };
    return (
      <button
        className="bin"
        onClick={() => binnedCharacter(simpson.charcater)}
      >
        Bin
      </button>
    );
  }
}

export default Bin;
