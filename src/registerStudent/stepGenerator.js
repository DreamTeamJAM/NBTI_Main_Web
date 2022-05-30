import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/stepSlice";
import { updateStudent, selectStudent } from "redux/studentSlice";
import { useFormik } from "formik";
import { inputGeneration } from "Templates/formGeneration";
import { validationHandler } from "services/formValidation";
import { selectCount } from "redux/stepSlice";


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
  function Buttons(){
    if(1<=activeStep && activeStep<=4)
    {
      return(
    <><button
      type="submit"
      onClick={() => {
        dispatch(decrement());
        dispatch(updateStudent(formInfo));
      }}
    >
      Back
    </button>
    <button
      type="submit"
      onClick={() => {
        dispatch(increment());
        dispatch(updateStudent(formInfo));
      }}
    >
      Next
    </button>
    </>
    
    )
 }
else if(activeStep===5){
  return(
  <>
  <button
    type="submit"
    onClick={() => {
      dispatch(decrement());
      dispatch(updateStudent(formInfo));
    }}
  >
    Back
  </button>
  <button
    type="submit"
    onClick={() => {
      dispatch(increment());
      dispatch(updateStudent(formInfo));
    }}
  >
    Submit
  </button>
  </>)
}
  }


  const validate = (values) =>{
   return validationHandler(formInfo,inputs);
  }

const formik = useFormik({
  initialValues: {...formInfo},
  validate,
  onSubmit: (values) => {}});
  // formik = {...formik, errors : validate()}
  console.log(formik)
  const inputHtml =inputGeneration(inputs,formInfo,updateBasicInfo,formik)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>{inputHtml}</form>

      <Buttons></Buttons>
    </>
  );
};

export default StepGenerator;
