import styled from "styled-components";
import CityImg from "./images/nightCity.jpg";
import { Container } from "GlobalStyles";

export const EnterpriseContainer = styled.div`
  width: 80vw;
  height: 70vh;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  @media ${({ theme }) => theme.lg} {
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    height: 80vh;
    width: 90vw;
  }
  @media ${({ theme }) => theme.md} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const FormTitleDiv = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /** Background */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background: url(${CityImg});
  background-size: cover;
  background-position: center;

  @media ${({ theme }) => theme.md} {
    width: auto;
  }

  h1 {
    padding-left: 0.3em;
    padding-right: 0.3em;
    margin: 0;
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    @media ${({ theme }) => theme.md} {
      font-size: 2rem;
      width: 80%;
      padding: 0.6em 1em 0 0;
    }
  }

  p {
    padding: 1.5em;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    @media ${({ theme }) => theme.md} {
      width: 80%;
      padding: 0 1.5em 0 0;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const FormImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerEnterprise = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${({ theme }) => theme.md} {
    flex-direction: column;
    align-items: center;
    padding-top: 6em;
    padding-bottom: 2em;
  }

  h1 {
    font-size: 2.5em;
    text-align: start;
    margin-top: -2em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
