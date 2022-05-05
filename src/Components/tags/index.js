import React, { useEffect, useState } from "react";
import "react-tagsinput/react-tagsinput.css";
import Select from "react-select";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import {LanguageOptions} from "Utils/Tongue"

 const Tags= ()=>{
    const [Tags, setTags] = useState({ tags: [] });
  
    const handleChange = (tags) => {
      console.log(tags);
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
                console.log("Tagsss", tags);
                setFieldValue("tags", tags);
              }}
            />
          </Form>
        )}
      />
    );
  }


export default Tags;
