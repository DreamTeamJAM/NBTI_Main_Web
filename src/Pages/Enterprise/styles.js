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
  }

  p {
    padding: 1.5em;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  
  h1{
      font-size: 2.5em;
      text-align: start;
      margin-top: -2em;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;
