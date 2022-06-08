import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/stepSlice";
import { updateStudent, selectStudent } from "redux/studentSlice";
import {selectUser} from "redux/Slice";
import { useFormik } from "formik";
import { inputGeneration } from "Templates/formGeneration";
import { validationHandler } from "services/formValidation";
import { selectCount } from "redux/stepSlice";
import AuthService from "services/auth/auth.service";
import { postStudent } from "services/api/studentApi";
import { uploadFile, downloadFile } from "services/api/fileApi";
// import {FormButton} from "GlobalStyles";
import { ContainerButton } from "registerStudent/styles";
import {
  AccountDiv,
  FormStep,
  FormButton,
  AccountDivEdited,
} from "registerStudent/styles";

function GenerateStudent(res, photoId, dniBackId, dniFrontId, student) {
  let st = {
    ...student,
    id: undefined,
    userId: res.id,
    photoId: photoId,
    dniFrontId: dniFrontId,
    dnibackId: dniBackId,
  };
  delete st.photo;
  delete st.dniFront;
  delete st.dniBack;
  console.log(st);
  postStudent(st);
}

async function Id(props) {
  const photoString = props.split(",");
  const byteString = photoString[1];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  const photoBlob = new Blob([ia]);
  console.log("photo", photoBlob);
  let formData = new FormData();
  formData.append("file", photoBlob);
  return await uploadFile(formData);
}

const handleLogin = async (user, student) => {
  await AuthService.register(user.username, user.email, user.password);
  await AuthService.login(user.username, user.password);
  await AuthService.getCurrentUser().then(async (res) => {
    const photoId = await Id(student.photo);
    const dniBack =await Id(student.dniFront);
    const dniFront =await Id(student.dniBack);
    GenerateStudent(res, photoId, dniBack, dniFront, student);
  });
  console.log("res:", AuthService.getCurrentUser());
};

const StepGenerator = (props) => {
  const inputs = props.inputMap;
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [formInfo, setFormInfo] = React.useState(student);
  const activeStep = useSelector(selectCount);
  const user =useSelector(selectUser)

  const updateBasicInfo = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function Buttons() {
    if (1 <= activeStep && activeStep <= 4) {
      return (
        <>
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(decrement());
              dispatch(updateStudent(formInfo));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back
          </FormButton>

          <FormButton
            type="submit"
            onClick={() => {
              dispatch(increment());
              dispatch(updateStudent(formInfo));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Next
          </FormButton>
        </>
      );
    } else if (activeStep === 5) {
      return (
        <>
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(decrement());
              dispatch(updateStudent(formInfo));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back
          </FormButton>
          <br />
          <FormButton
            type="submit"
            onClick={() => {
              dispatch(increment());
              dispatch(updateStudent(formInfo));
              handleLogin(user, formInfo);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Submit
          </FormButton>
        </>
      );
    }
  }

  const validate = (values) => {
    return validationHandler(formInfo, inputs);
  };

  const formik = useFormik({
    initialValues: { ...formInfo },
    validate,
    onSubmit: (values) => {},
  });
  // formik = {...formik, errors : validate()}
  console.log(formik);
  const inputHtml = inputGeneration(inputs, formInfo, updateBasicInfo, formik);
  if (props.isInput) {
    return (
      <>
        <FormStep onSubmit={formik.handleSubmit}>
          <AccountDiv>{inputHtml}</AccountDiv>
        </FormStep>

        <ContainerButton>
          <Buttons></Buttons>
        </ContainerButton>
      </>
    );
  } else {
    return (
      <>
        <FormStep onSubmit={formik.handleSubmit}>
          <AccountDivEdited>{inputHtml}</AccountDivEdited>
        </FormStep>

        <ContainerButton>
          <Buttons></Buttons>
        </ContainerButton>
      </>
    );
  }
};

export default StepGenerator;
