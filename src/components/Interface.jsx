import React from "react";
import Personnage from "./Personnage";

const Interface = () => {
  const { likeBtn, deleteBtn } = useParams;
  console.log(likeBtn, "hello");
  return (
    <div>
      {simpsons.map((simpson) => {
        return (
          <Personnage
            simpson={simpson}
            likeBtn={likeBtn}
            deleteBtn={deleteBtn}
          />
        );
      })}
      ;
    </div>
  );
};

export default Interface;
