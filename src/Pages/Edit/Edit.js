import React, { useContext, useState } from "react";
import { StudentContext } from "context/ProviderContxt";
import { useFormik } from "formik";
import { inputGeneration } from "Templates/formGeneration";
import { validationHandler } from "services/formValidation";
import AuthService from "services/auth/auth.service";
import { putStudent } from "services/api/studentApi";
import { uploadFile, downloadFile } from "services/api/fileApi";
// import {FormButton} from "GlobalStyles";
import {
  inputsStep1,
  inputsStep2,
  inputsStep3,
  inputsStep4,
  inputsStep5,
} from "Templates/InputModel";
import { Link, useLocation } from "react-router-dom";
import {
  ContainerButton,
  AccountDiv,
  FormStep,
  FormButton,
  AccountDivEdited,
  H1,
  FormStep2,
} from "./style";
import { Container } from "GlobalStyles";

function GenerateStudent(res, photoId, dniBackId, dniFrontId, student) {
  let st = {
    ...student,
    userId: res.id,
    photoId: photoId,
    dniFrontId: dniFrontId,
    dnibackId: dniBackId,
  };
  delete st.photo;
  delete st.dniFront;
  delete st.dniBack;
  for (const work of st.workExperience) {
    delete work.id;
  }
  for (const edu of st.education) {
    delete edu.id;
  }
  for (const lang of st.otherLanguages) {
    delete lang.id;
  }
  for (const volun of st.volunteering) {
    delete volun.id;
  }
  console.log("ddd", st);
  putStudent(st);
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

const handlePut = async (student) => {
  await AuthService.getCurrentUser().then(async (res) => {
    const photoId = student.photo == null ? null : await Id(student.photo);

    const dniBack =
      student.dniFront == null ? null : await Id(student.dniFront);
    const dniFront = student.dniBack == null ? null : await Id(student.dniBack);
    GenerateStudent(res, photoId, dniBack, dniFront, student);
  });
};

const Edit = (props) => {
  const array = [
    inputsStep1,
    inputsStep2,
    inputsStep3,
    inputsStep4,
    inputsStep5,
  ];
  const location = useLocation();
  const x = location.pathname.charAt(location.pathname.length - 1);
  let isInput = true;
  if (x == 1) {
    isInput = false;
  }
  const inputs = array[x - 1];

  const student = useContext(StudentContext);
  const initFormInfo = {
    ...student.data,
    photo: "data:image/png;base64, " + student.data.photo,
    dniFront: "data:image/png;base64, " + student.data.dniFront,
    dniBack: "data:image/png;base64, " + student.data.dniBack,
  };
  const [formInfo, setFormInfo] = React.useState(initFormInfo);
  // setFormInfo((prevState) => ({
  //   ...prevState,
  //   photo: "data:image/png;base64, "+formInfo.photo,
  //   dniFront: "data:image/png;base64, "+formInfo.dniFront,
  //   dniBack: "data:image/png;base64, "+formInfo.dniBack,
  // }));
  const [changes, setinfoChanges] = useState({});
  const updateBasicInfo = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function Buttons() {
    return (
      <>
        <Link to={`/profile`}>
          <FormButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back
          </FormButton>
        </Link>

        <br />

        <FormButton
          type="submit"
          onClick={async () => {
            //   props.loading(true);
            await handlePut(formInfo);
          }}
        >
          Submit
        </FormButton>
      </>
    );
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

  const inputHtml = inputGeneration(inputs, formInfo, updateBasicInfo, formik);
  if (isInput) {
    return (
      <Container>
        <FormStep onSubmit={formik.handleSubmit}>
          <AccountDiv>{inputHtml}</AccountDiv>
          <ContainerButton>
            <Buttons></Buttons>
          </ContainerButton>
        </FormStep>
      </Container>
    );
  } else {
    return (
      <Container>
        <FormStep2 onSubmit={formik.handleSubmit}>
          <H1>Personal Info</H1>
          <AccountDivEdited>{inputHtml}</AccountDivEdited>
          <ContainerButton>
            <Buttons></Buttons>
          </ContainerButton>
        </FormStep2>
      </Container>
    );
  }
};

export default Edit;
