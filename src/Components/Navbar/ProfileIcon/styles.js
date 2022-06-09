import styled from "styled-components";
import image from "./img/icon.jpeg";
import { Link } from "react-router-dom";

export const DropDownCardStyled = styled.div`
  position: absolute;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  padding: 1em;
  width: 150px;
  height: 300px;
  margin-top: 0.98em;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    text-align: left;
    padding: 0.5em;
  }

  hr {
    margin: 0.5em 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  padding-top: -0px;
  color: #000000;

  span {
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  :hover span {
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  }
`;

export const UserButton = styled.button`
  &:hover {
    filter: brightness(90%);
  }
`;
export const Img = styled.img`
border-radius: 50%;
width: 40px;
height: 40px;
object-fit: cover;
box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
transition: all 0.3s ease-in-out;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
