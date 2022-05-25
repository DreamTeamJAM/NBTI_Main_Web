import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
} from 'redux/stepSlice';
import { updateStudent,selectStudent } from 'redux/studentSlice';
import { useFormik } from "formik";
import {inputGeneration} from "Templates/formGeneration"

const StepGenerator = (props) => {
 
const inputs=props.inputMap

  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [workExperience,setWorkExperience]= React.useState(student)  

    const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setWorkExperience(prevState => ({
          ...prevState,
          [name]: value
      }));
  };


const formik = useFormik({
  initialValues: student,
  //validate,
  onSubmit: (values) => {}});
  const inputHtml =inputGeneration(inputs,workExperience,updateBasicInfo,formik)
  return (
  <>
    
    <form onSubmit={formik.handleSubmit}>

{inputHtml}
  
  </form>
         
          <button type="submit" onClick={() => {
                dispatch(decrement())
                dispatch(updateStudent(workExperience))
          }} >Back</button>
          <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(workExperience))
          }} >Next</button>
      
   
  </>
)};

export default StepGenerator;
