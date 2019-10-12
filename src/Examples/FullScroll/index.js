import React from "react";
import Reveal from "react-reveal/Fade";

import { Container } from "./styles";

import background1 from "../../assets/background1.jpg";

const FullScroll = () => {
  return (
    <Container background1={background1}>
      <nav id="navbar">
        <ul>
          <li>
            <a href="/">BACK</a>
          </li>
          <li>
            <a href="/fullscroll">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      <nav id="vertical-nav">
        <ul>
          <li>
            <p>Page 1</p>
            <a href="#page1">O</a>
          </li>
          <li>
            <p>Page 2</p>
            <a href="#page2">O</a>
          </li>
          <li>
            <p>Page 3</p>
            <a href="#page3">O</a>
          </li>
          <li>
            <p>Page 4</p>
            <a href="#page4">O</a>
          </li>
        </ul>
      </nav>

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
    </Container>
  );
};
export default FullScroll;
