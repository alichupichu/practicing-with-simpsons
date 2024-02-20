import React from "react";

const Search = () => {
  const { data, handleSearch, userInput } = useParams;
  return (
    <>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        value={userInput}
        placeholder="Search for a character here"
        className="searchInput"
        formMethod="submit"
        id="searchBox"
      ></input>
      <button>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
          <path
            d="M96.3,85.9L69.9,59.6c9.8-14.4,8.3-34.2-4.4-46.9C51-1.8,27.6-1.8,13.1,12.6C-1.3,27.1-1.3,50.6,13.1,65
                    c12.7,12.7,32.6,14.2,46.9,4.4l26.5,26.5l0,0c1.3,1.3,3.1,2.2,5,2.2c3.8,0,6.9-3.1,6.9-6.9C98.6,89.1,97.7,87.2,96.3,85.9z
                    M16.7,61.4c-12.5-12.5-12.4-32.8,0-45.3c12.4-12.4,32.8-12.4,45.3,0c12.5,12.5,12.4,32.8,0,45.3C49.4,74,29.1,73.9,16.7,61.4z"
          />
        </svg>
      </button>
    </>
  );
};

export default Search;
