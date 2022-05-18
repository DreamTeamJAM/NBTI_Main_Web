import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavTitleImg = styled.img`
  width: 6em;
  margin-right: 15px;
`;

export const Item = styled(Link)`
  margin: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  color: #000;
  transition: 300ms all ease-in-out;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,0);

  :hover {
    color: rgba(0,0,0,0.8);
    border-bottom: 1px solid rgba(0,0,0,0.8);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
