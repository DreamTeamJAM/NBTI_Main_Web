import React, { useEffect, useState } from "react";
import "react-tagsinput/react-tagsinput.css";
import Select from "react-select";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import {LanguageOptions} from "Utils/Tongue"
import {phonePrefixes} from "Utils/phonePrefixes"

 export const LanguageTags= ()=>{
    const [Tags, setTags] = useState({ tags: [] });
  
    const handleChange = (tags) => {
      setTags(tags);
    };
   // useEffect(() => {
    //  console.log("tags", Tags);
   // });
  
  
    return (
      <Formik
        initialValues={Tags}
        onSubmit={React.onSubmit}
        render={({ values, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} noValidate name="simpleForm">
            <Select
              isMulti
              options={LanguageOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              isSearchable={false}
              onChange={(tags) => {
                setFieldValue("tags", tags);
              }}
            />
          </Form>
        )}
      />
    );
  }

  export const PhonePrefixTags= ()=>{
    const [Tags, setTags] = useState({ tags: [] });
  
    const handleChange = (tags) => {
      setTags(tags);
    };
   // useEffect(() => {
    //  console.log("tags", Tags);
   // });
  
   const prefixOptions = phonePrefixes.map(p => {
    
      return {
        value: p.dial_code,
        label: "(" + p.code + ") " + p.dial_code

      } 
    
  })

    return (
      <Formik
        initialValues={Tags}
        onSubmit={React.onSubmit}
        render={({ values, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} noValidate name="simpleForm">
            <Select
              options={prefixOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              isSearchable={true}
              onChange={(tags) => {
                setFieldValue("tags", tags);
              }}
            />
          </Form>
        )}
      />
    );
  }


