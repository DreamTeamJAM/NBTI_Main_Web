import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import {increment} from 'redux/stepSlice';
import {updateUser, selectUser} from "redux/Slice"
import { defaultFieldValidation, PasswordFieldValidation } from "services/formValidation";

function Step0(){

  



  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const [basicInfo, setBasicInfo] = React.useState(user);
  console.log(user)
  const updateBasicInfo = (e) => {
      const { name, value } = e.target;
      setBasicInfo(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
  const validate = (values) => {
    const errors = {};
    
    defaultFieldValidation(basicInfo,errors,"username");
    PasswordFieldValidation(basicInfo,errors,"password","confirm_passWord");
    
    
    return errors;
  };
    const formik = useFormik({
        initialValues: {
          username: basicInfo.username,
          password: basicInfo.password,
          confirm_passWord:basicInfo.confirm_passWord,
        },
        validate,
        onSubmit: (values) => {}});
    return (
    <>
        <form onSubmit={formik.handleSubmit}>
              <label>UserName:</label>
              <input
                type="text"
                {...formik.getFieldProps("username")}
                value={basicInfo.username}
                name = "username"
                placeholder="Enter Username"
                onChange={updateBasicInfo}
              />
              {formik.touched.username && formik.errors.username ? (
                <p>{formik.errors.username}</p>
              ) : null}
              <br />
              <label>Password:</label>
              <input
                type="text"
                name ="password"
                {...formik.getFieldProps("password")}
                value={basicInfo.password}
                placeholder="Enter Password"
                onChange={updateBasicInfo}
              />
              {formik.touched.password && formik.errors.password ? (
                <p>{formik.errors.password}</p>
              ) : null}
              <br />
              <label>Confirm Password:</label>
              <input
                type="text"
                name ="confirm_passWord"
                {...formik.getFieldProps("confirm_passWord")}
                value={basicInfo.confirm_passWord}
                placeholder="Enter Confirm Password"
                onChange={updateBasicInfo}
              />
              {formik.touched.confirm_passWord && formik.errors.confirm_passWord ? (
                <p>{formik.errors.confirm_passWord}</p>
              ) : null}
              <br />
              </form>
              <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateUser(
                {username: basicInfo.username,
                password: basicInfo.password}))
             
              //save cosas
          }} >next</button>
              </>
              
    )
} 
export default Step0;