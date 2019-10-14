import styled from "styled-components";

export const Container = styled.div`
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
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;

          :hover {
            font-size: 17px;
          }
        }
      }
    }
  }
`;

//${props => props.backgroundColor}
