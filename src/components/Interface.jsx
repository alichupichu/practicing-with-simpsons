import React, { Component } from "react";
import Personnage from "./Personnage";

class Interface extends Component {
  //state = {};
  render() {
    const { likeBtn } = this.props;
    // const [...simpsons] = this.props.simpsons;
    // const { charcater } = this.props;
    console.log(likeBtn, "hello");
    return (
      <div>
        {this.props.simpsons.map((simpson) => {
          return <Personnage simpson={simpson} likeBtn={likeBtn} />;
        })}
        ;
      </div>
    );
  }
}

export default Interface;
