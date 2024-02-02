import React, { Component } from "react";
import Character from "./Character";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Personnage extends Component {
  //state = {};
  render() {
    console.log(this.props);
    const { character, quote, image, characterDirection } = this.props.simpsons;
    //const { simpson, charcater, quote, image, deletePersonnage } = this.props;
    return (
      <div key={character}>
        {/* <p>{character}</p> */}

        <Character
          character={character}
          characterDirection={characterDirection}
        />
        <Quote quote={quote} />
        <Image image={image} />
        {/* //<Controls /> */}
      </div>
    );
  }
}

export default Personnage;
