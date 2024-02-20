import React from "react";

const Image = () => {
  const { character, image } = useParams;

  return (
    <a href={`${image}`}>
      <img src={`${image}`} alt={`${character}`} />
    </a>
  );
};

export default Image;
