import React from "react";
import {
  MdWork,
  MdAddShoppingCart,
  MdAssignmentInd,
  MdCameraFront
} from "react-icons/md";

import { Container } from "./styles";

const Animations = ({ history }) => {
  return (
    <Container>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        BACK
      </button>
      <h1>TÍTULO</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure
          officia nemo est! Laborum sint, accusamus, sapiente delectus ipsam
          assumenda illum obcaecati, labore reiciendis ad quidem quod dolores
          rem tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet sint tempore voluptatem, incidunt sit voluptatum exercitationem
          quibusdam praesentium unde dolor deleniti. Magnam, in. Et impedit
          illum eum vero est incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure
          officia nemo est! Laborum sint, accusamus, sapiente delectus ipsam
          assumenda illum obcaecati, labore reiciendis ad quidem quod dolores
          rem tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet sint tempore voluptatem, incidunt sit voluptatum exercitationem
          quibusdam praesentium unde dolor deleniti. Magnam, in. Et impedit
          illum eum vero est incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure
          officia nemo est! Laborum sint, accusamus, sapiente delectus ipsam
          assumenda illum obcaecati, labore reiciendis ad quidem quod dolores
          rem tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet sint tempore voluptatem, incidunt sit voluptatum exercitationem
          quibusdam praesentium unde dolor deleniti. Magnam, in. Et impedit
          illum eum vero est incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure
          officia nemo est! Laborum sint, accusamus, sapiente delectus ipsam
          assumenda illum obcaecati, labore reiciendis ad quidem quod dolores
          rem tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet sint tempore voluptatem, incidunt sit voluptatum exercitationem
          quibusdam praesentium unde dolor deleniti. Magnam, in. Et impedit
          illum eum vero est incidunt!
        </p>
      </div>
      <MdWork className="MdWork" />
      <MdAddShoppingCart className="MdAddShoppingCart" />
      <MdAssignmentInd className="MdAssignmentInd" />
      <MdCameraFront className="MdCameraFront" />
    </Container>
  );
};

export default Animations;
