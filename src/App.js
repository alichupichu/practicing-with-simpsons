import React, { Component } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
import Interface from "./components/Interface";
import LikesCount from "./components/LikesCount";
import Search from "./components/Search";
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

  likeBtn = () => {
    let cliked = this.state.simpsons.findIndex(
      (simpson) => this.state.simpson.charcater === this.state.charcater
    );
    //simpson.[clicked].like = !simpson.[cliked].like;
    console.log(
      this.state.simpson[cliked],
      "{simpson.character} character was clicked"
    );
  };

  render() {
    console.log(this.state);

    if (!this.state.simpsons) {
      return <Spinner />;
    }

    // { THIS TERNARY BELOW DOESNT SEEM TO WORK
    //   !this.state.simpsons && <Spinner />;
    // }
    return (
      <>
        <h1 className="title">The Simpsons</h1>
        <div className="sub-header">
          <Search /> <LikesCount />
        </div>
        <Interface simpsons={this.state.simpsons} />
      </>
    );
  }
}

export default App;
