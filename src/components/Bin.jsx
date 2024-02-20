import React from "react";

const Bin = () => {
  const { character, deleteBtn } = useParams;

  return (
    <button className="bin" onClick={() => deleteBtn(character.id)}>
      Bin
    </button>
  );
};

export default Bin;
