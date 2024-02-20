import React, { Component } from "react";

class Sort extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div className="sort">
        <h4>Sort: </h4>
        <select id="sortOrder" onChange={(e) => onChange(e.target.value)}>
          <option value="alphabetic">A-Z</option>
          <option value="alphabeticRev">Z-A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
