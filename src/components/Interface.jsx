import React, { Component } from "react";
import Personnage from "./Personnage";

class Interface extends Component {
  //state = {};
  render() {
    const { likeBtn, deleteBtn } = this.props;
    console.log(likeBtn, "hello");
    return (
      <div>
        {this.props.simpsons.map((simpson) => {
          return (
            <Personnage
              simpson={simpson}
              likeBtn={likeBtn}
              deleteBtn={deleteBtn}
            />
          );
        })}
        ;
      </div>
    );
  }
}

export default Interface;
