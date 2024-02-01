import React, { Component } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
import Interface from "./components/Interface";
import "../src/App.css";

class App extends Component {
  state = {
    simpsons: [
      {
        quote:
          "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
        character: "Lisa Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right",
      },
      {
        quote: "Me fail English? That's unpossible.",
        character: "Ralph Wiggum",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
        characterDirection: "Left",
      },
      {
        quote:
          "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.",
        character: "Dr. Nick",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
        characterDirection: "Right",
      },
      {
        quote: "Marriage is like a coffin and each kid is another nail.",
        character: "Homer Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right",
      },
    ],
  };

  //{ simpsons: ["Homero", "Marge", "Lisa", "Bart"] }

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: data });
  };

  render() {
    const { simpsons } = this.state;

    return;
    <div>
      {!simpsons.length && <Spinner />}
      {simpsons.map((simpson) => {
        return <Interface />;
      })}
    </div>;
  }
}

export default App;
