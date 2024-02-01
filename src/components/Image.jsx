import React, { Component } from "react";

class Image extends Component {
  //state = {};
  render() {
    const { image } = this.props;
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;

    return <img src="{simpson.image}" alt="{simpson.charcater}" />;
  }
}

export default Image;
