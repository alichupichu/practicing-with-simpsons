import React, { Component } from "react";

class Bin extends Component {
  //state = {  }

  render() {
    const { simpson, charcater, deletePersonnage } = this.props;
    const [...simpsons] = this.props.simpsons;

    //the function/call back lives in the app.js but we can invoque it here

    let binBtn = () => {
      let binned = simpsons.findIndex((item) => simpson.quote === quote);
      let binnedquote = simpson.splice(binned);
    };
    return (
      <button key={id} className="bin" onClick={deletePersonnage}>
        Bin
      </button>
    );
  }
}

export default Bin;
