import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.bg};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h1 {
    color: #eee;
    font-size: 50px;
  }

  button {
    border: none;
    height: 50px;
    width: 140px;
    padding: 5px;
    margin-top: 20px;

    background-color: #e50914;

    box-shadow: 2px 3px 0 #000;

    color: #eee;
    font-weight: 700;

    cursor: pointer;
    :hover {
      background-color: #d10a14;
    }
  }

  .back {
    background-color: #0f0f0f;
    :hover {
      background-color: #0a0a0a;
    }
  }
`;
