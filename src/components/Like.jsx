import React, { Component } from "react";

class Like extends Component {
  //state = {};

  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;

    let likeBtn = () => {
      let cliked = simpsons.findIndex(
        (simpson) => simpson.charcater === charcater
      );
      //simpson.[clicked].like = !simpson.[cliked].like;
      console.log(simpson[cliked], "{simpson.character} character was clicked");
    };

    return (
      <button className="like" onClick={this.likeBTn(simpson.character)}>
        Thumbs Up
      </button>
    );
  }
}

export default Like;
