import React from "react";
import Like from "./Like";
import Bin from "./Bin";

const Controls = () => {
  const { character, likeBtn, deleteBtn } = useParams;

  return (
    <div className="controls">
      <Like likeBtn={likeBtn} character={character} />
      <Bin deleteBtn={deleteBtn} character={character} />
    </div>
  );
};

export default Controls;
