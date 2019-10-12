import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #fcfeff url('${props => props.background}') no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  h1 {
    margin-top: 50px;
    color: #fcfeff;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;

    :hover {
      transform: scale(1.05);
    }
  }

  button {
    border: none;
    width: 100px;
    height: 40px;
    background: #5e2075;
    color: #fcfeff;
    padding: 3px;
    font-weight: bold;
    font-size: 11px;
    border-radius: 10%;
    margin-top: 130px;


    box-shadow: 7px 10px 10px  rgba(0,0,0);

    :hover {
      cursor: pointer;
      background: #5e2079;
      width: 105px;
      height: 45px;
      font-size: 12px;
    }
  }
`;

// 5e2075
// fcfeff
// ff6a0e
// 171519
