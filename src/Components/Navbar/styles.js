import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100vw;
    top: 0;
    margin: 0;
    padding: 0;
    background-color: #16161a;
    height: 4em;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NavTitle = styled.h1`
    color: #fff;
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
  color: #fff;
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