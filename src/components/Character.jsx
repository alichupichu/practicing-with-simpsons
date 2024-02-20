import React from "react";

const Character = () => {
  const { character, characterDirection } = useParams;

  return <h2 className={`${character} ${characterDirection}`}>{character}</h2>;
};

export default Character;
