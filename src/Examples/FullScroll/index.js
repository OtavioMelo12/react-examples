import React from "react";
import Reveal from "react-reveal/Fade";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { animateScroll as scroll } from "react-scroll";

import { Container } from "./styles";

import background1 from "../../assets/background1.jpg";

import NavbarTop from "./components/NavabarTop";
import NavbarVertical from "./components/NavbarVertical";

const FullScroll = () => {
  return (
    <Container background1={background1}>
      <ReactScrollWheelHandler
        timeout={600}
        upHandler={() => {
          scroll.scrollTo(
            document.documentElement.scrollTop - window.innerHeight,
            { duration: 600 }
          );
        }}
        downHandler={() => {
          scroll.scrollTo(
            document.documentElement.scrollTop + window.innerHeight,
            { duration: 600 }
          );
        }}
      >
        <NavbarTop />

        <NavbarVertical />
        <section id="page1">
          <div>
            <Reveal left>
              <h1>Página 1</h1>
            </Reveal>
          </div>
        </section>
        <section id="page2">
          <div>
            <Reveal left>
              <h1>Página 2</h1>
            </Reveal>
          </div>
        </section>
        <section id="page3">
          <div>
            <Reveal left>
              <h1>Página 3</h1>
            </Reveal>
          </div>
        </section>
        <section id="page4">
          <div>
            <Reveal left>
              <h1>Página 4</h1>
            </Reveal>
          </div>
        </section>
      </ReactScrollWheelHandler>
    </Container>
  );
};

export default FullScroll;
