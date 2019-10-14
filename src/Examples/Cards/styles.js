import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100%;
  width: 100%;
  padding: 30px;
  background: #555 url('${props => props.background}') no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.hm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px;

    .btn {
      border: 1px solid #333;
      height: 80px;
      width: 400px;
      padding: 6px;
      font-size: 30px;
      font-weight: bold;
      color: #222;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 5px 5px 2px rgba(0, 0, 0,1);
      margin-top: 30px;

      z-index: 0;

      :hover {
        cursor: pointer;
        box-shadow: 7px 8px 2px rgba(0, 0, 0, 0.9);
        transform: translateX(-2px);
        background-color: #ff6a0e;
        color: #fff;
      }
    }
  }

  ul {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50vh 50vh;
    grid-gap: 40px;
    padding-left: 60px;

    align-items: center;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 250px;
      width: 200px;
      background: transparent;
    }

    form {
      background-color: #f4f4f4;;
      height: 150px;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 10px;
      border: 1px solid #333;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
      border-radius: 10px;

      label {
        color: #000;
        margin-bottom: 4px;
        font-size: 13px;
      }

      input {
        height: 40px;
        border: 1px solid #333;
        border-radius: 10px;
        padding: 4px;
        margin-bottom: 5px;
        font-size: 12px;
      }
      div {
        display: flex;

        button {
          height: 30px;
          width: 50%;
          border: none;
          border-radius: 10px;
          color: #333;
          font-size: 14px;
          font-weight: bold;
          background-color: transparent;
          border: 1px solid #333;
          margin: 3px;

          :hover {
            background-color: #ff6a0e;
            cursor: pointer;
            color: #f4f4f4;
          }
        }
      }
    }
  }

`;

export const CardFront = styled.div`
  height: 250px;
  width: 200px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);

  img {
    border-radius: 50%;
    width: 100%;
    height: 80%;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 15px;
    padding: 3px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 12px;
  }

  h3 {
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    background-color: #333;
    color: #f4f4f4;
    border-radius: 10px;
    margin-top: 3px;
  }

  :hover {
    transform: translateY(-2px);
    box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export const CardBack = styled.div`
  height: 250px;
  width: 200px;
  padding: 20px;
  background: #ff6a0e;
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);

  h1 {
    color: #f4f4f4;
    font-size: 15px;
    padding: 3px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 12px;
    color: #f4f4f4;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    background-color: #333;
    color: #f4f4f4;
    border-radius: 10px;
    margin-top: 3px;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }

  :hover {
    transform: translateY(-2px);
    box-shadow: 6px 8px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
