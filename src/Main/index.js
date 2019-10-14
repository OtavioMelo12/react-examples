import React from "react";
import Reveal from "react-reveal/Fade";

import Particles from "react-particles-js";
import particlesOpt from "./particlesjs-config.json";

import { Container } from "./styles";

import backgroundMain from "../assets/backgroundMain.jpg";

const Main = ({ history }) => {
  return (
    <Container background={backgroundMain}>
      <Particles
        params={particlesOpt}
        style={{
          position: "fixed",
          width: "100%",
          minHeight: "100%",
          background: "$background"
        }}
      />
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
