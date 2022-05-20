import styled from "styled-components";
import { Container } from "GlobalStyles";

export const BrochureContainer = styled(Container)`
  margin: 0;
  padding: 2.5em;
  width: 100vw;
  height: 80vh;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
`;

export const BrochureSectionTitle = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.4rem;
  border: 2px solid black;
  padding: 0.4em;
`;

export const BrochureContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 70%;

  p {
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 1.3em;
    width: 20vw;
  }
`;
