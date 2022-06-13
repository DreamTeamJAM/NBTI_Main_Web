import styled from "styled-components";
import { Container } from "GlobalStyles";

export const ContainerButton = styled.div`
  margin-top: 1em;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 46.6vw;
`;
export const AccountDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const AccountDivEdited = styled.div`
  display: grid;
  margin-left: 0.5em;
  margin-right: 1em;
  width:auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.9fr 0.8fr;
`;
export const FormStep = styled.form`
  margin-top: -1.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height:70vh;
  background-color: white;
`;
export const FormButton = styled.button`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  margin-bottom: 1em;
  border: 1px solid black;
  width: 8vw;
  height: 5vh;
  color: #fff;
  background-color: rgba(23, 22, 29, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(23, 22, 29, 0.8);
  }
`;
export const H1=styled.h1`
margin-top: -0.2em;
`;
export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8em;
  margin-bottom: 5em;
  background-color: white;
`;
export const FormStep2 = styled.form`
  margin-top: -1.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height:70vh;
  background-color: white;
  width:80vw;
`;