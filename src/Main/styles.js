import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #4c4870;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  a {
    color: #f4f4f4;
    font-size: 40px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }

  div {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      border: none;
      width: 100px;
      height: 40px;
      color: #fcfeff;
      padding: 3px;
      font-weight: bold;
      font-size: 11px;
      border-radius: 10%;
      margin: 15px;

      box-shadow: 7px 10px 10px rgba(0, 0, 0);

      :hover {
        cursor: pointer;
        width: 105px;
        height: 45px;
        font-size: 12px;
      }
    }

    #scroll {
      background: #5e2075;
    }
    #cards {
      background: #ff6a0e;
    }
    #animations {
      background: rgba(179, 116, 204, 1);
    }
    #hooks {
      background: #31b3d3;
    }
    #parallax {
      background: #ffce1f;
    }
  }
`;

// 5e2075
// fcfeff
// ff6a0e
// 171519
