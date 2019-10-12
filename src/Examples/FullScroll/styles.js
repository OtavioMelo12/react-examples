import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  height: 100%;

  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  ::-webkit-scrollbar {
    width: 0;
  }
  /* overflow: hidden; */


  nav#navbar {
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 60px;
    background: transparent;

    ul {
      display: flex;
      width: 100%;
      justify-content: center;

      li {
        margin: 0 1rem;
        padding: 1rem;

        a {
          text-decoration: none;
          text-transform: uppercase;
          color: #fff;
          font-weight: 1000;
          font-size: 16px;

          :hover {
            color: #f4f4f4;
          }
        }
        :hover {
          transform: translateY(2px);
        }
      }
    }
  }

  nav#vertical-nav {
    position: fixed;
    right: 25px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 100%;
    background: transparent;

    ul {
      display: flex;
      flex-direction: column;
      width: auto;
      height: 100%;
      justify-content: center;
      align-items: center;
      margin-right: 50px;

      li {
        margin: 1rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10px;
        position: relative;

        p {
          font-size: 0px;
          color: #fff;
          left: 0;
          width: 50px;
          margin-right: 5px;
        }

        a {
          position: fixed;
          text-decoration: none;
          text-transform: uppercase;
          color: #fff;
          font-weight: 1000;
          font-size: 16px;
        }

        :hover {
          margin: 0.469rem;
          width: 60px;
          p {
            font-size: 15px;
            transform: translateX(-25px);
          }
          a {
            font-size: 19px;
          }
        }
      }
    }
  }

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
