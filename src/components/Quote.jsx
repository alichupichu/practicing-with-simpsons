import React, { Component } from "react";

class Quote extends Component {
  //state = {};
  render() {
    const { quote } = this.props;

    return <p className={`${quote}`}>{quote}</p>;
  }
}

export default Quote;
