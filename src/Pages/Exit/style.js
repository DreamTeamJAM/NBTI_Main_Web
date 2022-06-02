import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  margin-bottom: 1em;
  border: 1px solid black;
  width: auto;
  height: auto;
  color: #fff;
  background-color: rgba(23, 22, 29, 1);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: rgba(23, 22, 29, 0.8);
  }
`;

export const Button =styled.button`
padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  margin-bottom: 1em;
  
  margin-right:1em;
  border: 1px solid black;
  width: auto;
  height: auto;
  color: #fff;
  background-color: rgba(23, 22, 29, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(23, 22, 29, 0.8);
  }
`;
export const DivPdf = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height:40vh;
`;