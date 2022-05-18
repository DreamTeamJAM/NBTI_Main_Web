import styled from "styled-components";

/** Navbar Styles */
export const Nav = styled.nav`
  width: 100vw;
  height: 100px;
  top: 0;
  margin: 0;
  padding: 0;
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: fixed;
  z-index: 100;
`;

export const NavErasmusImg = styled.img`
  width: 16em;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LanguageIcon = styled.img`
  width: 30px;

  &:hover {
    -webkit-filter: drop-shadow(2px 2px 2px #181eb3);
    filter: drop-shadow(2px 3px 0px #181eb3);
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Ground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`