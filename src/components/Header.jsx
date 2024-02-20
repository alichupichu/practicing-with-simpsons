import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="title">The Simpsons</h1>
      <div className="sub-header">
        {/* <Search searchTerm={searchTerm} userInput={this.handleSearch} /> */}
        {/* <LikesCount count={count} />  */}
        <Sort onChange={this.handleSortOrder} />
      </div>
    </>
  );
};

export default Header;
