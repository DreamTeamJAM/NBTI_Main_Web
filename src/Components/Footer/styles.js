import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 0;
  padding: 5em;
  width: 95vw;
  height: 80vh;
  background-color: #0b0d17;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 12em;
    margin: 0;
    margin-top: -3em !important;
  }
`;

export const FooterMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  width: 80vw;
  margin-left: 6em;
`;

export const FooterHelper = styled.div`
  width: 80vw;
`

export const CopyContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2.5em;
`

export const Copyright = styled.p`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
`