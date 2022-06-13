import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.darkBlue};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  box-shadow: ${({ open }) =>
    open ? "50px 0px 0px 100vw rgba(0,0,0,0.3)" : "none"};

  & hr {
    width: 100vw;
  }

  @media ${({ theme }) => theme.sm} {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-left: 25px;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 45px;
  font-size: 23px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 400;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
  text-align: left;
  padding-left: 1em;
  margin-bottom: 0.7em;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #fff;
    z-index: -1;
    transition: all 0.5s;
  }

  :hover::before {
    width: 100%;
  }

  :hover {
    color: ${({ theme }) => theme.darkBlue};
  }

  :active:before {
    background: #b9b9b9;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
  padding: 1em;
  transition: all 0.5s;
  cursor: pointer;
  border-bottom: 1px solid white;
`;
