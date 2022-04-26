import styled from "styled-components";

/** Navbar Styles */
export const Nav = styled.nav`
  width: 100vw;
  height: 100px;
  top: 0;
  margin: 0;
  padding: 0;
  background-color: #ffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  -webkit-box-shadow: 0px 5px 29px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 5px 29px -5px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const NavTitleImg = styled.img`
  width: 18em;
  margin-bottom: -0.5em;
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

export const LanguageSelect = styled.select`
  width: 50px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #fff;
  list-style: none;
  text-align: center;
  border: 2px solid black;
  

`
