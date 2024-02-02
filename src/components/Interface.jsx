import React, { Component } from "react";
import Personnage from "./Personnage";

class Interface extends Component {
  //state = {};
  render() {
    console.log(this.props);
    // const { simpson } = this.props;
    // const [...simpsons] = this.props.simpsons;
    // const { charcater } = this.props;

    return (
      <div>
        {this.props.simpsons.map((simpson) => {
          return <Personnage simpsons={simpson.character} />;
        })}
        ;
      </div>
    );
  }
}

export default Interface;
