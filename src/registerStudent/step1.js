import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from 'redux/stepSlice';
import {updateStudent, selectStudent} from "redux/studentSlice"
import { defaultFieldValidation, basicFieldValidation, numberFieldValidation } from "services/formValidation";
import {drivingLicense} from "Utils/drivingLicenses"
import { languages } from "Utils/languages";
import {inputGeneration} from "Templates/formGeneration"
function Step1(){
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
  const drivingOptions = drivingLicense.map((drive) => ({
    value: drive,
    label: drive,
  }));

  const inputs = {
        "name" : {type: "text"},
        "dni" : {type: "text"},
        "city": {type: "text"},
        "firstSurname": {type: "text"},
        "secondSurname": {type: "text"},
        "nationality":{type: "option",
                      options : nationalityOptions,
                      validation : "basic"},
        "phone": {type: "phone",
                  validation: "number"},
        "birthDate": {type:"date"},
        "gender": {type:"radio",
                  options : ["male", "female", "other"]},
        "email" : {type:"email"},
        "address": {type: "text"},
        "aboutMe": {type: "textarea"},
        "digitalSkills" : {type: "textarea"},
        "comunicationSkills" : {type: "textarea"},
        "drivingLicense" : {type: "option",
                        options : drivingOptions},
        "hobbies" : {type: "textarea"},
}
  const dispatch = useDispatch();
  const student = useSelector(selectStudent)
  const [basicInfo, setBasicInfo] = React.useState(student);
  const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setBasicInfo(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  
  const validate = (values) => {
    const errors = {};
    

    Array.from(["landlord","address","region","postalCode"]).forEach((s) => defaultFieldValidation(values,errors,s))
    Array.from(["email", "city"]).forEach((s) => basicFieldValidation(values,errors,s));
    Array.from(["telephone", "rentPerMonth","deposit"]).forEach((s) => numberFieldValidation(values,errors,s));
    
    return errors;
  };
  
    const formik = useFormik({
        initialValues: basicInfo,
        validate,
        onSubmit: (values) => {}});

      const inputHtml =inputGeneration(inputs,basicInfo,updateBasicInfo,formik)
    
    return (
    <>
        <form onSubmit={formik.handleSubmit}>

            {inputHtml}
              
              </form>
              <button type="submit" onClick={(e) => {
                dispatch(decrement())
                dispatch(updateStudent(basicInfo))
          }} >Back</button>
              <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(basicInfo))
          }} >Next</button>
              </>
              
    )
} 
export default Step1;