import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/stepSlice";
import { updateStudent, selectStudent } from "redux/studentSlice";
import { useFormik } from "formik";
import { inputGeneration } from "Templates/formGeneration";
import { validationHandler } from "services/formValidation";
import { selectCount } from "redux/stepSlice";
// import {FormButton} from "GlobalStyles";
import { ContainerButton } from "registerStudent/styles";
import {
  AccountDiv,
  FormStep,
  FormButton,
  AccountDivEdited,
} from "registerStudent/styles";

const StepGenerator = (props) => {
  const inputs = props.inputMap;
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [formInfo, setFormInfo] = React.useState(student);
  const activeStep = useSelector(selectCount);

  const updateBasicInfo = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function Buttons() {
    if (1 <= activeStep && activeStep <= 4) {
      return (
        <>
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(decrement());
              dispatch(updateStudent(formInfo));
              window.scrollTo({top: 0, behavior: 'smooth'})
            }}
          >
            Back
          </FormButton>

          <FormButton
            type="submit"
            onClick={() => {
              dispatch(increment());
              dispatch(updateStudent(formInfo));
              window.scrollTo({top: 0, behavior: 'smooth'})
            }}
          >
            Next
          </FormButton>
        </>
      );
    } else if (activeStep === 5) {
      return (
        <>
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(decrement());
              dispatch(updateStudent(formInfo));
              window.scrollTo({top: 0, behavior: 'smooth'})
            }}
          >
            Back
          </FormButton>
          <br />
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(increment());
              dispatch(updateStudent(formInfo));
              window.scrollTo({top: 0, behavior: 'smooth'})
            }}
          >
            Submit
          </FormButton>
        </>
      );
    }
  }

  const validate = (values) => {
    return validationHandler(formInfo, inputs);
  };

  const formik = useFormik({
    initialValues: { ...formInfo },
    validate,
    onSubmit: (values) => {},
  });
  // formik = {...formik, errors : validate()}
  console.log(formik);
  const inputHtml = inputGeneration(inputs, formInfo, updateBasicInfo, formik);
  if (props.isInput) {
    return (
      <>
        <FormStep onSubmit={formik.handleSubmit}>
          <AccountDiv>{inputHtml}</AccountDiv>
        </FormStep>

        <ContainerButton>
          <Buttons></Buttons>
        </ContainerButton>
      </>
    );
  } else {
    return (
      <>
        <FormStep onSubmit={formik.handleSubmit}>
          <AccountDivEdited>{inputHtml}</AccountDivEdited>
        </FormStep>

        <ContainerButton>
          <Buttons></Buttons>
        </ContainerButton>
      </>
    );
  }
};

export default StepGenerator;
