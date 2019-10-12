import React from "react";
import Reveal from "react-reveal/Fade";

import { Container } from "./styles";

import backgroundMain from "../assets/backgroundMain.jpg";

const Main = ({ history }) => {
  return (
    <Container background={backgroundMain}>
      <Reveal top cascade>
        <h1>Exemplos: </h1>
        <button
          onClick={() => {
            history.push("/fullscroll");
          }}
        >
          FULL SCROLL
        </button>
      </Reveal>
    </Container>
  );
};

export default Main;
