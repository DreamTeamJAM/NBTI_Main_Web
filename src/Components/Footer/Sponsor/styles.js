import styled from "styled-components";

export const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 150px;
  margin-top: 3em;

  div {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    width: 80vw;
    height: 150px;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    justify-content: center;
    align-content: center;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 6em;

    div {
      height: auto;
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const SponsorImg = styled.img`
  padding-top: 50px;
`;
