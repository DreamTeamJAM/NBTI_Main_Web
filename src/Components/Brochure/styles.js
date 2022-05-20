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
  align-items: center;
  width: 70%;
  margin-top: 2em;

  p {
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    width: 25vw;
  }

  img {
    filter: drop-shadow(0 8px 3px rgba(0, 0, 0, 0.4));
  }
`;

export const DownloadButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;
export const LeftContent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  height: 40vh;

  hr {
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
`;
