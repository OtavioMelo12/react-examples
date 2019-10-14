import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  height: 100%;

  /* overflow-y: scroll; */
  /* scroll-behavior: smooth; */
  /* scroll-snap-type: y mandatory; */

  ::-webkit-scrollbar {
    width: 0;
  }
  /* overflow: hidden; */

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;

    scroll-snap-align: center;
  }

  section#page1 {
    background: linear-gradient(
      to right bottom,
      #f2a800,
      #f5b409,
      #f8c014,
      #fbcd1f,
      #fdd929
    );
    background-size: cover;
    div {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 4rem;
        color: #f4f4f4;
        margin-bottom: 10px;
      }
    }
  }

  section#page2 {
    background: linear-gradient(
      to right top,
      #2e5e24,
      #327f27,
      #31a229,
      #2ac62a,
      #0deb2a
    );
    background-size: cover;

    div {
      width: 400px;
      margin-top: 15vh;
      h1 {
        font-size: 4rem;
        color: #f4f4f4;
      }
    }
  }

  section#page3 {
    background: linear-gradient(
      to right top,
      #355751,
      #3a7a70,
      #399e91,
      #30c4b4,
      #0debd8
    );
    div {
      h1 {
        font-size: 4rem;
        color: #f4f4f4;
        margin-bottom: 10px;
      }
    }
  }

  section#page4 {
    background: linear-gradient(
      to right top,
      #6b4468,
      #8c447f,
      #af4093,
      #d632a4,
      #ff00b1
    );
    div {
      h1 {
        font-size: 4rem;
        color: #f4f4f4;
        margin-bottom: 10px;
      }
    }
  }
`;

//${props => props.backgroundColor}
