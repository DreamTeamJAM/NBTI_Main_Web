import styled from "styled-components";
import { theme } from "theme";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: top;
  background-size: cover;
  transition: 750ms all ease-in-out;

  @media ${theme.sm} {
    background-position: right;
  }
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  left: 30%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 500px;
  color: white;
  text-align: justify;
  

  h1 {
    font-size: 4rem;
    max-width: 75vw;
    width: 700px;
    text-align: start;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(
      to right,
      hsla(0, 0%, 0%, 1),
      hsla(238, 76%, 40%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    width: 700px;
    font-size: 1.2em;
    text-align: justify;
    line-height: 1.8em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    margin-top: -1em;
  }

  @media ${theme.sm} {
    left: 55%;
    right: 50%;
    top: 22em;
    width: 100vw;

    h1 {
      max-width: 90vw;
      font-size: 2.3rem;
      text-align: center;
    }

    div {
      background-color: rgba(255, 255, 255, 0.7);
      width: 90vw;
    }

    p {
      width: 80vw;
      font-size: 1em;
      padding: 1em;
      
    }
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
`;
export const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #fff;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
  cursor: pointer;
`;
