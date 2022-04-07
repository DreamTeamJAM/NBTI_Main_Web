import { Link } from 'react-router-dom';
import styled from 'styled-components'

/** Navbar Styles */
export const Nav = styled.nav`
    width: 100vw;
    top: 0;
    margin: 0;
    padding: 0;
    background-color: #ffff;
    height: 4em;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NavTitle = styled.h1`
    color: #000;
    font-weight: 400;
    font-size: 2em;
    font-family: 'Times New Roman', Times, serif;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 1px;
  margin: 0px 13px 0px 13px;
  color: #000;
  transition: all .3s ease-in-out;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover{
    color: #C8C8C8;
  }
`;

export const Ul = styled.ul`
    display: inline-block;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0px 3px 0px 3px;
  }
`

export const LanguageIcon = styled.img`
  width: 30px;
  
  &:hover {
    -webkit-filter: drop-shadow(2px 2px 2px #181eb3);
  filter: drop-shadow(2px 3px 0px #181eb3);
      
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`