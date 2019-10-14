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
    background: #333 url('${props => props.background1}') no-repeat;
    background-size: cover;
    div {
      background-color: rgba(0,0,0,0.8);
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
    background: #555;
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
    background: #3465;
    div {
      h1 {
        font-size: 4rem;
        color: #333;
        margin-bottom: 10px;
      }
    }
  }

  section#page4 {
    background: #c515;
    div {
      h1 {
        font-size: 4rem;
        color: #333;
        margin-bottom: 10px;
      }
    }
  }
`;

//${props => props.backgroundColor}
