import styled from "styled-components";
import { Container } from "GlobalStyles";

export const BrochureContainer = styled(Container)`
  margin: 0;
  padding: 2.5em;
  width: 100vw;
  height: auto;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;

  @media ${(props) => props.theme.md} {
    width: 80vw;
  }

  @media ${(props) => props.theme.lg} {
  }
`;

export const BrochureSectionTitle = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.4rem;
  border: 2px solid black;
  padding: 0.4em;

  @media ${(props) => props.theme.md} {
    font-size: 2rem;
    width: 80vw;
  }

  @media ${(props) => props.theme.lg} {
  }
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
    width: 30vw;
  }

  img {
    filter: drop-shadow(0 8px 3px rgba(0, 0, 0, 0.4));
  }
  @media ${(props) => props.theme.lg} {
    flex-direction: row;
    align-items: center;
    margin-top: -4em;
  }

  @media ${(props) => props.theme.md} {
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 1em;
      width: 20em;
    }

    p {
      margin-top: auto;
      width: 70vw;
    }
  }

  @media only screen and (max-width: 380px) {
    p {
      margin-top: 9em;
      width: 70vw;
    }

    img {
      margin-top: 7em;
      width: 20em;
    }
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

  @media ${(props) => props.theme.md} {
  }

  @media ${(props) => props.theme.lg} {
    justify-content: center;
    margin-right: 2em;
  }
`;
