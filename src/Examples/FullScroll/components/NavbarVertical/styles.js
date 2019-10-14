import styled from "styled-components";

export const Container = styled.div`
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

        a {
          position: fixed;
          text-transform: uppercase;
          color: #fff;
          font-weight: 1000;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .checked {
            display: none;
          }

          p {
            display: none;
            color: #fff;
          }

          :hover {
            transform: translateX(-25px);
            p {
              display: flex;
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }

        a.active {
          font-size: 20px;

          .checked {
            display: block;
          }

          .unchecked {
            display: none;
          }
        }
      }
    }
  }
`;

//${props => props.backgroundColor}
