import React, { Component } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
import Interface from "./components/Interface";
import "../src/App.css";

class App extends Component {
  state = {};

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

    return (
      <>
        {!simpsons.length && <Spinner />}
        {simpsons.map((simpson) => {
          return <Interface />;
        })}
      </>
    );
  }
}

export default App;
