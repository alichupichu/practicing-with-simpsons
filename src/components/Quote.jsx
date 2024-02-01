import React, { Component } from "react";

class Quote extends Component {
  //state = {};
  render() {
    const { simpson } = this.props;
    const [...simpsons] = this.state.simpsons;
    const { quote } = this.props;
    return <p className="quote">{simpson.quote}</p>;
  }
}

export default Quote;
