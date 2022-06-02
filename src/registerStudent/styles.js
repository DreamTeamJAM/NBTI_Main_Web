import styled from "styled-components";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { Container } from "GlobalStyles";

export const DefaultStepper = styled(Stepper)`
  background-color: red;
  width: auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
export const DefaultStep = styled(Step)`
  background-color: whitesmoke;
  height: 5em;
`;
export const DefaultStepLabel = styled(StepLabel)``;
export const ContainerStudent = styled(Container)`
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
`;
export const StudentContainer = styled(Container)`
  margin-top: -8vh;
  margin-bottom: 0;
  padding: 0;
  width: 80vw;
  height: 70vh;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
export const Margin = styled.div`
  margin-top: 1em;
`;
export const ContainerButton = styled.div`
  margin: 0;
  padding: 0;
  display: flex;

  justify-content: space-between;
  width: 46.6vw;
`;
export const ArrayContainer = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  width: 80vw;
  height: auto;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ArrayDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  flex-direction: column;
  align-items: center;
`;
export const SelectStudent = styled.select`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 1em;
  width: auto;
  height: auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
export const DivDefault = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  width: 80vw;
  height: auto;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const PhotoInput = styled.input`
  width: 10vw;
  height: auto;
`;
export const AccountDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const AccountDivEdited = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

export const FormStep = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height:70vh;
`;

export const InputForm = styled.input`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  width: 20vw;
  height: auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
export const InputRadio = styled.input`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  height: auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
export const TextArea = styled.textarea`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  width: 20vw;
  height: auto;
  margin-left: 0.5em;
  margin-right: 0.5em;
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
export const ButtonX = styled.button`
  padding: 0.6rem 1rem;
  outline: none;
  margin-left: 0.5em;
  margin-top: 0.5em;
  border: 1px solid black;
  width: auto;
  height: auto;
  color: #fff;
  background-color: rgba(220, 20, 60, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(220, 20, 60, 0.5);
  }
`;
export const ButtonAdd = styled.button`
  padding: 0.6rem 1rem;
  outline: none;
  margin-top: 0.5em;
  margin-left: 0.3em;
  border: 1px solid black;
  width: auto;
  height: auto;
  color: #fff;
  background-color: rgba(34, 139, 34, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(34, 139, 34, 0.8);
  }
`;
export const TagsDiv = styled.div`
  margin-left: 23.5em;
  margin-right: 27em;

  height: auto;
`;
