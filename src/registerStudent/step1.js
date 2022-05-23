import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import {increment} from 'redux/stepSlice';
import {updateStudent, selectStudent} from "redux/studentSlice"

function Step1(){

  const dispatch = useDispatch();
  const student = useSelector(selectStudent)
  const [basicInfo, setBasicInfo] = React.useState(student);
  console.log(student)
  const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setBasicInfo(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

    const formik = useFormik({
        initialValues: {
          name: basicInfo.name,
          firstSurname: basicInfo.firstSurname
        },
        //validate
        onSubmit: (values) => {}});
    return (
    <>
        <form onSubmit={formik.handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                value={basicInfo.name}
                name = "name"
                onChange={updateBasicInfo}
              />
              {formik.touched.name && formik.errors.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
              <br />
              <label>First Surname:</label>
              <input
                type="text"
                name ="firstSurname"
                {...formik.getFieldProps("firstSurname")}
                value={basicInfo.firstSurname}
                onChange={updateBasicInfo}
              />
              {formik.touched.firstSurname && formik.errors.firstSurname ? (
                <p>{formik.errors.firstSurname}</p>
              ) : null}
              <br />
              </form>
              <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(basicInfo))
             
              //save cosas
          }} >next</button>
              </>
              
    )
} 
export default Step1;