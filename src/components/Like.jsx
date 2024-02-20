import React from "react";

const Like = () => {
  const { character, likeBtn } = useParams;

  return (
    <button className="like" onClick={() => likeBtn(character)}>
      Thumbs Up
    </button>
  );
};

export default Like;
