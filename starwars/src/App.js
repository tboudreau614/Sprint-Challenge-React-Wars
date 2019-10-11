import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsChar from "./components/StarWarsChar";
import "./App.css";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [starWarschar, setStarWarsChar] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(resp => {
      setStarWarsChar(resp.data.results);
      console.log(resp.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Div>
        {starWarschar.map(char => {
          return <StarWarsChar char={char} key={char.name} />;
        })}
      </Div>
    </div>
  );
};

export default App;