import React from "react";

const Sort = () => {
  const { onChange } = useParams;

  return (
    <div className="sort">
      <h4>Sort: </h4>
      <select id="sortOrder" onChange={(e) => onChange(e.target.value)}>
        <option value="alphabetic">A-Z</option>
        <option value="alphabeticRev">Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
