import React, { Component } from "react";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import axios from "axios";
import "../src/App.css";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [quotes, setQuotes] = useState();
  const [userSearch, setHandleSearch] = useState("");
  const [errors, setErrors] = useState(null);

  const schema = { name: Joi.string().min(2).max(19) };

  const handleSearch = (input) => {setHandleSearch({ searchTerm: input })};


  const deleteBtn = (index) => {
    const simpsons = [...simpsons];
    simpsons.splice(index, 1);
    setSimpsons({ simpsons });

  const likeBtn = (id) => {
    const simpsons = [...simpsons];
    let clicked = simpsons.findIndex((simpson) => simpson.id === id);
    simpsons[clicked].like = !setSimpsons[clicked].like;
    setSimpsons({ simpsons: setSimpsons });
    console.log(
      this.state.simpsons[clicked],
      "{simpson.character} character was clicked"
    );
  }; 

 let handleSearch = (input) => {
    setHandleSearch({ searchTerm: input });
  };

    // joi validation of search-input
    schema = { character: Joi.string().min(2).max(19) };
    const _joiInstance = Joi.object({ search: Joi.string().min(2).max(19) });
    try {
      await _joiInstance.validateAsync({ search: this.state.searchTerm });

      //clearing errors when input is valid

      setHandleSearch({ errors: null });
    } catch (e) {
      //check errors on console
      // console.log(e);
      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });

      console.log(errorsMod);
      //Put errors upstairs in the state:
      setHandleSearch({ errors: errorsMod });
    }
  };

  //SORT CHARACTERS

  const handleSortOrder = (order) => {
    setSimpsons({ sortOrder: order });
  };

  const sortCharacters = (characters) => {
    const { sortOrder } = setNewOrder;
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


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://thesimpsonsquoteapi.glitch.me/quotes?count=100`
        );
        const dataWithID = data.forEach((e,i) => ({
          ...item,
          (e.id = Math.random() + i),
          liked: false,
        }));
        setSimpsons(dataWithID);
      } catch (error) {
        console.log("Error getting data", error);
      }
    };
    getData();
  }, []);





if (!simpsons) {
  return < Spinner />
}
  return ( 
    <>

        <Interface
          simpsons={simpsons}
          likeBtn={likeBtn}
          deleteBtn={deleteBtn}
        />
      </>
   );
};
 
export default App;