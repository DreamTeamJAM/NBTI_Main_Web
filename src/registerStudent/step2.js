import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setToAmount,
} from 'redux/stepSlice';
import { updateStudent,selectStudent } from 'redux/studentSlice';
import {ArrayInput} from "Templates/inputComponent"
import { languages } from "Utils/languages";
import { useFormik } from "formik";
import {inputGeneration} from "Templates/formGeneration"

const Step2 = () => {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
const inputs={
  workExperience:{
    type:"array",
    children:{
      "title": {type:"text"},
    "startDate":{type:"date"},
    "endDate":{type:"date"},
    "country":{type: "option",
                      options : nationalityOptions,
                      validation : "basic"},
     "city": {type:"text"},
     "company": {type:"text"},
     "tasks": {type:"textarea"},
    }
}
}

  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [workExperience,setWorkExperience]= React.useState(student)  
    const initialValues = student.workExperience.length > 0 ?
     {workExperience: student.workExperience} : {
      workExperience: [
        {
          title: '',
          startDate: '',
        },
      ],
    };
    const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setWorkExperience(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

function iterateElement(element){
  const elementHtml = []
  for (const [key, input] of Object.entries(element)) {
    let currentInput = (<>
      <label>{key}</label>
          <Field
              name={key}
              type="text"
                        />
                        </>
    );
    elementHtml.push(currentInput);
  }
  return elementHtml
}

const formik = useFormik({
  initialValues: initialValues,
  //validate,
  onSubmit: (values) => {}});
  const inputHtml =inputGeneration(inputs,workExperience,updateBasicInfo,formik)
  return (
  <>
    
    <form onSubmit={formik.handleSubmit}>

{inputHtml}
  
  </form>
         
          <button type="submit" onClick={(e) => {
                dispatch(decrement())
                dispatch(updateStudent(workExperience))
          }} >Back</button>
          <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(workExperience))
          }} >Next</button>
      
   
  </>
)};

export default Step2;
