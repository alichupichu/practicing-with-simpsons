import React, { Component } from "react";

class Quote extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { charcater } = this.props;
    return <p>quote goes here</p>;
  }
}

export default Quote;
