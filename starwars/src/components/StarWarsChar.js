import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style-type: none;
  padding-bottom: 0%;
  font-size: 1.5rem;
  `;

  const H1 = styled.li`
  font-size: 2.0rem;
  font-weight: strong;
  margin-bottom: 50px;
  margin-top: 75px;
  `;

  const StarWarsChars = styled.div`
  width: 33%;
  height: fit-content;
  padding-bottom: 5%;
  background-color: chocolate;
  border: 10px solid white;
  color: white;
  border-radius: 25px;
  margin: 3% 3%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

  function StarWarsChar(props) {
    return (
      <StarWarsChars>
        <UL>
          <li>
            <H1>{props.char.name}</H1>
          </li>
          <li>Birth Year: {props.char.birth_year}</li>
          <li>Eye Color: {props.char.eye_color}</li>
          <li>Height: {props.char.height} cm</li>
          <li>Mass: {props.char.mass} kg</li>
        </UL>
      </StarWarsChars>
    );
  }

  export default StarWarsChar;