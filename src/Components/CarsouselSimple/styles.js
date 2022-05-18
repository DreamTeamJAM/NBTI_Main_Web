import styled from "styled-components";

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
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: max-content;
  color: white;
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
