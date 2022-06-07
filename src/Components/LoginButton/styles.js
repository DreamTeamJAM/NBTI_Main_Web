import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #181eb3 2px;
  border-radius: 0.3em;
  background: ${(props) => props.bgcolor};
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0.5px;
  overflow: hidden;
  padding: 0.45em 0.65em;
  text-decoration: none;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-left: 1em;
  text-decoration-color: ${(props) => props.txcolor};
  transition: 0.45s all ease-in-out;

  :hover {
    background: ${(props) => props.hoverbgcolor};
    color: ${(props) => props.hovercolor};
  }
`;
