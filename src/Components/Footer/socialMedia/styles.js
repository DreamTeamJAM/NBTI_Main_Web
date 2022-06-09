import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { theme } from "theme";

export const Ul = styled.ul`
  list-style: none;

  @media ${theme.sm} {
    div {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;

    }
  }
`;

export const Li = styled.li`
  list-style: none;
  padding: 1em 0 1em 0;
`;

export const FooterTitle = styled.li`
  color: #fff;
  font-size: 1.1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  margin-bottom: 0.8em;
`;

export const Instagram = styled(AiFillInstagram)`
  color: #fff;
  font-size: 2em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #d9d9d9;
  }
`;

export const Facebook = styled(FaFacebookSquare)`
  color: #fff;
  font-size: 2em;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #d9d9d9;
  }

  @media ${theme.sm} {
    margin-left: 1em;
  }
`;
