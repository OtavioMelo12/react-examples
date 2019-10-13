import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #fcfeff url('${props => props.background}') no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  a {
    color: #222;
    font-size: 40px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    text-shadow: 1px 2px 1px rgba(0,0,0,0.8);

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }

  div {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button#scroll {
      border: none;
      width: 100px;
      height: 40px;
      background: #5e2075;
      color: #fcfeff;
      padding: 3px;
      font-weight: bold;
      font-size: 11px;
      border-radius: 10%;
      margin: 15px;


      box-shadow: 7px 10px 10px  rgba(0,0,0);

      :hover {
        cursor: pointer;
        width: 105px;
        height: 45px;
        font-size: 12px;
      }
    }
    button#cards {
      border: none;
      width: 100px;
      height: 40px;
      background: #ff6a0e;
      color: #fcfeff;
      padding: 3px;
      font-weight: bold;
      font-size: 11px;
      border-radius: 10%;
      margin: 15px;


      box-shadow: 7px 10px 10px  rgba(0,0,0);

      :hover {
        cursor: pointer;
        width: 105px;
        height: 45px;
        font-size: 12px;
      }
    }
  }

`;

// 5e2075
// fcfeff
// ff6a0e
// 171519
