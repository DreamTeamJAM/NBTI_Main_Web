import styled from "styled-components";
import { Container } from "GlobalStyles";

export const ContainerProfile = styled(Container)`
  margin-top: 0;
  padding: 0;
  width: 120vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5em;
    text-align: start;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  @media ${({ theme }) => theme.md} {
    overflow-x: hidden;
    width: 100vw;
  }
`;
export const DivGrid = styled.div`
  display: grid;
  width: 90vw;
  height: auto;
  grid-gap: 10px;
  flex-direction: column;
  align-items: center;
`;
export const Div = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 3fr 0.5fr 3fr 0.5fr;
  width: 90vw;
  height: 30vh;
  grid-gap: 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);

  @media ${({ theme }) => theme.md} {
    grid-template-columns: 1fr;
    height: auto;
    width: auto;
  }
`;
export const DivUp = styled.div`
  height: auto;
`;
export const DivDown = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 3fr 0.1fr 1fr;
  @media ${({ theme }) => theme.md} {
    grid-template-columns: 1fr;
    height: auto;
    width: auto;
  }
`;
export const DivDown2 = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  height: auto;
`;
export const DivD = styled.div`
  height: auto;
  margin: 1em;
  padding: 1em;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.2);
`;
export const DivM = styled.div``;
export const DivW = styled.div``;
export const DivSpin = styled.div`
  height: 40vh;
`;
/////////////////////////////////////////////////////
export const IMG = styled.img`
  width: 8vw;
  /* height: 16vh; */
  border-radius: 50%;
  object-fit: cover;

  @media ${({ theme }) => theme.md} {
    width: 150px;
    height: 150px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ButtonNav = styled.button`
  margin-left: 1em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  margin-bottom: 1em;

  margin-right: 1em;
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
export const H2 = styled.h2`
  text-decoration: underline;
`;
export const U = styled.u`
  font-size: 18px;
`;
export const Header = styled.header`
  margin-top: -1em;
`;
export const Iframe = styled.iframe`
  width: 95%;
  height: 120vh;
`;
export const Imagen = styled.img`
  width: 1vw;
  height: 2vh;
  @media ${({ theme }) => theme.md} {
    width: auto;
  }
`;
