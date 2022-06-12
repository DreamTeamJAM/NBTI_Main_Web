import styled from "styled-components";
import { Container } from "GlobalStyles";

/** Home Styles */
export const Maindiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeContainer = styled(Container)`
  margin: 0;
  overflow-x: hidden;
`;

export const ButtonDiv = styled.div`
  @media ${(props) => props.theme.lg} {
    background: none;
    margin: 1em -2.5em 1em 0;
  }
  @media ${(props) => props.theme.md} {
    background: none;
    margin: 1em -1em 1em 0;
  }
`;
