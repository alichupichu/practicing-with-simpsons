import React, { Component } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
import Interface from "./components/Interface";
import "../src/App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ simpsons: data });
  };

  // add callback function here to change the state that can be invoqued in the personnage component but the method must live on the parent this will be a reference.
  deletePersonnage = (index) => {
    const simpson = [...this.state.simpsons];
    simpson.splice(index, 1);
    this.setState({ simpson });
  };

  //add a lifting state reference here so that the personnage can acess it later. WE lift the state to send it back down

  render() {
    console.log(this.props);
    const { simpsons } = this.state;

    return;

    if (!this.state.simpsons) {
      return <Spinner />;
    }

    // { THIS BELOW DOESNT SEEM TO WORK
    //   !this.state.simpsons && <Spinner />;
    // }
    return <Interface simpsons={this.state.simpsons} />;
  }
}

export default App;
