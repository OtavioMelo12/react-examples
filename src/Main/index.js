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
          top: 0,
          position: "absolute",
          width: "100%",
          Height: "100%"
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
          <button
            id="animations"
            onClick={() => {
              history.push("/animations");
            }}
          >
            ANIMATIONS
          </button>
          <button
            id="hooks"
            onClick={() => {
              history.push("/hooks");
            }}
          >
            HOOKS
          </button>
        </div>
      </Reveal>
    </Container>
  );
};

export default Main;
