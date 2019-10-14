import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  padding: 30px;

  min-height: 100%;
  width: 100%;

  background: linear-gradient(
    to right,
    rgba(125, 66, 122, 1) 0%,
    rgba(179, 116, 204, 1) 100%
  );

  button {
    position: relative;
    left: 10px;
    z-index: 1;
    border: none;
    height: 40px;
    width: 70px;
    background: #333;
    color: #f4f4f4;
    cursor: pointer;
    box-shadow: 2px 2px 0 #111;
    :hover {
      background: #222;
    }
  }

  h1 {
    z-index: 1;
    color: #f4f4f4;
    position: absolute;
  }

  div {
    margin-top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 40px;
    p {
      position: relative;
      z-index: 1;
      color: #f4f4f4;
      margin: 20px;
    }
  }

  .MdWork {
    width: 40px;
    height: 40px;
    position: absolute;
    animation: MdWork 3s infinite alternate ease-in-out;
  }
  .MdAddShoppingCart {
    width: 40px;
    height: 40px;
    position: absolute;
    animation: MdAddShoppingCart 5s infinite alternate ease-in-out;
  }
  .MdAssignmentInd {
    width: 40px;
    height: 40px;
    position: absolute;
    animation: MdAssignmentInd 4s infinite alternate ease-in-out;
  }
  .MdCameraFront {
    width: 40px;
    height: 40px;
    position: absolute;
    animation: MdCameraFront 3s infinite alternate ease-in-out;
  }

  @keyframes MdWork {
    0% {
      top: 0;
      left: 0;
    }
    30% {
      top: 0;
      left: 20%;
      color: #333;
    }
    100% {
      top: 30%;
      left: 30%;
    }
  }
  @keyframes MdAddShoppingCart {
    0% {
      top: 0;
      right: 0;
    }
    50% {
      top: 40%;
      right: 20%;
      color: #333;
    }
    100% {
      top: 80%;
      right: 20%;
    }
  }
  @keyframes MdAssignmentInd {
    0% {
      top: 70%;
      right: 50%;
    }
    50% {
      top: 15%;
      right: 80%;
      color: #333;
    }
    100% {
      top: 10%;
      right: 45%;
    }
  }
  @keyframes MdCameraFront {
    0% {
      top: 70%;
      left: 10%;
    }
    50% {
      top: 34%;
      left: 45%;
      color: #333;
    }
    100% {
      top: 65%;
      left: 67%;
    }
  }
`;
