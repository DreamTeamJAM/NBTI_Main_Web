import styled from "styled-components";
import { theme } from "theme";

export const FooterContainer = styled.footer`
  margin: 0;
  padding: 5em;
  width: 95vw;
  height: auto;
  background-color: #0b0d17;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;

  img {
    width: 12em;
    margin: 0;
    margin-top: -3em !important;
  }

  @media ${theme.sm} {
    width: 61vw;
  }

  @media ${theme.md} {
    width: auto;
  }
`;

export const FooterMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  width: 80vw;
  margin-left: 0em;
  overflow-x: hidden;

  @media ${theme.sm} {
    width: 62vw;
    grid-template-columns: 1fr;
  }
`;

export const FooterHelper = styled.div`
  width: 80vw;
`;

export const CopyContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2.5em;

  @media ${theme.sm} {
    margin-top: 6em;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
