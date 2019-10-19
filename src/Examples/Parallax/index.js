/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

import { Container } from "./styles";

import background1 from "../../assets/background1.jpg";
import backgroundMain from "../../assets/backgroundMain.jpg";

const Parallax = () => {
  const parallaxEl = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      let offset = window.scrollY;
      parallaxEl.current.style.backgroundPositionY = offset * 0.7 + "px";
    };
  });

  return (
    <Container background1={background1} backgroundMain={backgroundMain}>
      <div ref={parallaxEl}>
        <h1>Div 1</h1>
      </div>
      <div>
        <h1>Div 2</h1>
      </div>
      <div>
        <h1>Div 3</h1>
      </div>
      <div>
        <h1>Div 4</h1>
      </div>
    </Container>
  );
};

export default Parallax;
