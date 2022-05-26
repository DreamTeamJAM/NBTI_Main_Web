import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
} from 'redux/stepSlice';
import { updateStudent,selectStudent } from 'redux/studentSlice';
import { useFormik } from "formik";
import {inputGeneration} from "Templates/formGeneration"
import { validationHandler } from "services/formValidation";


const StepGenerator = (props) => {
 
  const inputs=props.inputMap

  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [formInfo,setFormInfo]= React.useState(student)  

    const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setFormInfo(prevState => ({
          ...prevState,
          [name]: value
      }));
  };


  const validate = (values) => validationHandler(formInfo,inputs);

const formik = useFormik({
  initialValues: student,
  validate,
  onSubmit: (values) => {}});
  const inputHtml =inputGeneration(inputs,formInfo,updateBasicInfo,formik)
  return (
  <>
    
    <form onSubmit={formik.handleSubmit}>

{inputHtml}
  
  </form>
         
          <button type="submit" onClick={() => {
                dispatch(decrement())
                dispatch(updateStudent(formInfo))
          }} >Back</button>
          <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(formInfo))
          }} >Next</button>
      
   
  </>
)};

export default StepGenerator;
