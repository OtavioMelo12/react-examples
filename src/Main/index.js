import React from "react";
import Reveal from "react-reveal/Fade";

import { Container } from "./styles";

import backgroundMain from "../assets/backgroundMain.jpg";

const Main = ({ history }) => {
  return (
    <Container background={backgroundMain}>
      <Reveal top cascade>
        <a href="/">Exemplos: </a>
        <div>
          <button
            id="scroll"
            onClick={() => {
              history.push("/fullscroll");
            }}
          >
            FULL SCROLL
          </button>
          <button
            id="cards"
            onClick={() => {
              history.push("/cards");
            }}
          >
            CARDS
          </button>
        </div>
      </Reveal>
    </Container>
  );
};

export default Main;
