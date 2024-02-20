import React from "react";

const LikesCount = () => {
  const { character, quote, image, characterDirection, like, count } =
    useParams;

  simpsons &&
    simpsons.forEach((charcater) => {
      if (charcater.favourtie) count++;
    });

  return <p>Liked {count} times</p>;
};

export default LikesCount;
