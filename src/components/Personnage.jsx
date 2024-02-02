import React, { Component } from "react";
import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Personnage extends Component {
  //state = {};
  render() {
    const { character, quote, image, characterDirection, like } =
      this.props.simpson;

    const { likeBtn, deletePersonnage } = this.props;
    return (
      <div
        key={character}
        className={like ? "liked personnage" : "unliked personnage"}
      >
        {/* <p>{character}</p> */}

        <Character
          character={character}
          characterDirection={characterDirection}
        />
        <Quote quote={quote} />
        <Image image={image} />
        <Controls likeBtn={likeBtn} character={character} />
      </div>
    );
  }
}

export default Personnage;
