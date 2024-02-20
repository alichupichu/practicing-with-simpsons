import React, { Component } from "react";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import axios from "axios";
//import Search from "./components/Search";
import Sort from "./components/Sort";
//import Joi from "joi";
import "../src/App.css";
//import LikesCount from "./components/LikesCount";

const App = () => {
  state = {};

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, i) => (e.id = Math.random() + i));
    this.setState({ simpsons: data });
  };

  // add callback function here to change the state that can be invoqued in the personnage component but the method must live on the parent this will be a reference.
  deleteBtn = (index) => {
    const simpsons = [...this.state.simpsons];
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  //add a lifting state reference here so that the personnage can acess it later. WE lift the state to send it back down

  likeBtn = (id) => {
    let clicked = this.state.simpsons.findIndex((simpson) => simpson.id === id);
    this.state.simpsons[clicked].like = !this.state.simpsons[clicked].like;
    this.setState({ simpsons: this.state.simpsons });
    console.log(
      this.state.simpsons[clicked],
      "{simpson.character} character was clicked"
    );
  };

  // //search/input event handler

  // handleSearch = (input) => {
  //   this.setState({ searchTerm: input });
  // };

  //   // joi validation of search-input
  //   schema = { character: Joi.string().min(2).max(19) };
  //   const _joiInstance = Joi.object({ search: Joi.string().min(2).max(10) });
  //   try {
  //     await _joiInstance.validateAsync({ search: this.state.searchTerm });

  //     //clearing errors when input is valid

  //     this.setState({ errors: null });
  //   } catch (e) {
  //     //check errors on console
  //     // console.log(e);
  //     const errorsMod = {};
  //     e.details.forEach((error) => {
  //       errorsMod[error.context.key] = error.message;
  //     });

  //     console.log(errorsMod);
  //     //Put errors upstairs in the state:
  //     this.setState({ errors: errorsMod });
  //   }
  // };

  //SORT CHARACTERS

  handleSortOrder = (order) => {
    this.setState({ sortOrder: order });
  };

  sortCharacters = (characters) => {
    const { sortOrder } = this.state;
    // we need a new copy of the array
    const sortedCharacters = [...characters];

    switch (sortOrder) {
      case "alphabetic":
        //verify on console log
        // console.log("alphabetic");
        sortedCharacters.sort((a, b) => {
          if (a.character > b.character) {
            return 1;
          }
          if (a.character < b.character) {
            return -1;
          }
          return 0;
        });
        break;

      case "alphabeticRev":
        //confirm on console log
        // console.log("alphabeticRev");
        sortedCharacters.sort((a, b) => {
          if (a.character > b.character) {
            return -1;
          }
          if (a.character < b.character) {
            return 1;
          }
          return 0;
        });
        break;

      default:
        //if error
        console.log("Error");
        break;
    }
    return sortedCharacters;
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

        <Interface
          simpsons={this.state.simpsons}
          likeBtn={this.likeBtn}
          deleteBtn={this.deleteBtn}
        />
      </>
    );
  }
}

export default App;



const App = () => {
  const [quotes, setQuotes] = useState();
  const [handleSearch, setHandleSearch] = useState("");
  const [errors, setErrors] = useState(null);

  const schema = { name: Joi.string().min(2).max(19) };

  const 



  return (  );
}
 
export default App;