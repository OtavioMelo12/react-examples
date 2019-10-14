import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Container } from "./styles";

const NavabarTop = () => {
  return (
    <Container>
      <nav id="navbar">
        <ul>
          <li>
            <a href="/">BACK</a>
          </li>
          <li>
            <Link
              to=""
              onClick={e => {
                e.preventDefault();
                scroll.scrollToTop({ duration: 500 });
              }}
            >
              home
            </Link>
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
    </Container>
  );
};

export default NavabarTop;
