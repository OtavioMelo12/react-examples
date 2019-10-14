import React from "react";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { Link } from "react-scroll";

import { Container } from "./styles";

const NavabarVertical = () => {
  return (
    <Container>
      <nav id="vertical-nav">
        <ul>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="page1"
            >
              <p>Page 1</p>
              <MdRadioButtonChecked className="checked" />
              <MdRadioButtonUnchecked className="unchecked" />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="page2"
            >
              <p>Page 2</p>
              <MdRadioButtonChecked className="checked" />
              <MdRadioButtonUnchecked className="unchecked" />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="page3"
            >
              <p>Page 3</p>
              <MdRadioButtonChecked className="checked" />
              <MdRadioButtonUnchecked className="unchecked" />
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to="page4"
            >
              <p>Page 4</p>
              <MdRadioButtonChecked className="checked" />
              <MdRadioButtonUnchecked className="unchecked" />
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default NavabarVertical;
