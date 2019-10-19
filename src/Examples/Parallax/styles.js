import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100vh;

    h1 {
      font-size: 60px;
      background: #eee;
      padding: 8px 24px;
      border-radius: 16px;
    }
  }

  div:nth-child(1) {
    background: url('${props => props.background1}') no-repeat ;
    background-size: cover;
  }

  div:nth-child(2) {
    background: maroon;
  }

  div:nth-child(3) {
    height: 400px;
    background: url('${props => props.backgroundMain}');
    background-size: cover;
    background-attachment: fixed;
  }

  div:nth-child(4) {
    background: #ffb900;
  }


`;
