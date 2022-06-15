import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "redux/stepSlice";
import { updateUser, selectUser } from "redux/Slice";
import {
  defaultFieldValidation,
  PasswordFieldValidation,
} from "services/formValidation";
import { InputForm, LabelForm, FormButton } from "GlobalStyles";
import {
  StudentContainer,
  ContainerStudent,
  Margin,
  P
} from "registerStudent/styles";

function Step0() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [basicInfo, setBasicInfo] = React.useState(user);
  const updateBasicInfo = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;
    setBasicInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validate = (values) => {
    const errors = {};

    defaultFieldValidation(values, errors, "username");
    PasswordFieldValidation(values, errors, "password", "confirm_passWord");

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: basicInfo.username,
      password: basicInfo.password,
      confirm_passWord: basicInfo.confirm_passWord,
    },
    initialErrors: { neverFilled: true },
    validate,
    onSubmit: (values) => {},
  });
  return (
    <StudentContainer>
      <ContainerStudent>
        <h1>Account Info</h1>

        <form onSubmit={formik.handleSubmit}>
          <Margin>
            <LabelForm>UserName</LabelForm>
            <br />
            <InputForm
              type="text"
              {...formik.getFieldProps("username")}
              value={basicInfo.username}
              name="username"
              placeholder="Enter Username"
              onChange={updateBasicInfo}
            />
            {formik.touched.username && formik.errors.username ? (
              <P>{formik.errors.username}</P>
            ) : null}
            <br />
          </Margin>
          <Margin>
            <LabelForm>Password</LabelForm>
            <br />
            <InputForm
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
              value={basicInfo.password}
              placeholder="Enter Password"
              onChange={updateBasicInfo}
            />
            {formik.touched.password && formik.errors.password ? (
              <P>{formik.errors.password}</P>
            ) : null}
            <br />
          </Margin>
          <Margin>
            <LabelForm>Confirm Password</LabelForm>
            <br />
            <InputForm
              type="password"
              name="confirm_passWord"
              {...formik.getFieldProps("confirm_passWord")}
              value={basicInfo.confirm_passWord}
              placeholder="Enter Confirm Password"
              onChange={updateBasicInfo}
            />
            {formik.touched.confirm_passWord &&
            formik.errors.confirm_passWord ? (
              <P>{formik.errors.confirm_passWord}</P>
            ) : null}
            <br />
          </Margin>
        </form>
        <br />
        <FormButton
          type="submit"
          disabled={Object.keys(formik.errors).length !== 0}
          onClick={() => {
            formik.validateForm();
            dispatch(increment());
            dispatch(
              updateUser({
                username: basicInfo.username,
                password: basicInfo.password,
              })
            );

            //save cosas
          }}
        >
          Next
        </FormButton>
      </ContainerStudent>
    </StudentContainer>
  );
}
export default Step0;
