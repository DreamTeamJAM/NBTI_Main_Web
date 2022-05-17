import React, { useEffect, useState } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useFormik } from "formik";
import { formik, initialValues } from "./../CvForm/index.js";
import { languages } from "Utils/languages";
import { Container } from "GlobalStyles";
import { PhonePrefixTags } from "Components/tags";
import { Initial, selectUser } from "redux/Slice.js";
import { useDispatch, useSelector } from "react-redux";
import { GetSteps } from "Steps/step.js";

import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import File2 from "./file2.js";
import File3 from "./file3.js";

function File1() {
  const [name, setName] = useState("");
  const [firstSurname, setfirstSurname] = useState("");
  const [secondSurname, setsecondSurname] = useState("");
  const [nationality, setnationality] = useState("");
  const [phonePrefix, setphonePrefix] = useState("");
  const [phone, setphone] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [aboutMe, setaboutMe] = useState("");
  const [drivinglicense, setdrivinglicense] = useState("");
  const [hobbies, sethobbies] = useState("");

  const [activeStep, setActiveStep] = React.useState(0);
    const [autoPopulateData, setAutoPopulateData] = React.useState([]);
    const steps = GetSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      dispatch(
        Initial({
          name: name,
          firstSurname: firstSurname,
          secondSurname: secondSurname,
          nationality: nationality,
          phonePrefix: phonePrefix,
          phone: phone,
          birthDate: birthDate,
          gender: gender,
          email: email,
          address: address,
          aboutMe: aboutMe,
          drivinglicense: drivinglicense,
          hobbies: hobbies,
        })
      );
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  const validate = (values) => {
    //Faltan las traducciones de los errores.
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 5) {
      errors.name = "Too Short";
    }

    if (!values.firstSurname) {
      errors.firstSurname = "Required";
    } else if (values.firstSurname.length < 5) {
      errors.firstSurname = "Too Short";
    }

    if (!values.secondSurname) {
      errors.secondSurname = "Required";
    } else if (values.secondSurname.length < 5) {
      errors.secondSurname = "Too Short";
    }

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (values.phone.length < 6) {
      errors.phone = "Too Short";
    }

    if (!values.birthDate) {
      errors.birthDate = "Required";
    }

    if (!values.gender) {
      errors.gender = "Required";
    }
    //quizas se pueda validar mejor con algun regex
    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length < 6) {
      errors.address = "Too Short";
    }

    if (!values.aboutMe) {
      errors.aboutMe = "Required";
    } else if (values.aboutMe.length < 10) {
      errors.aboutMe = "Too Short";
    }

    if (!values.hobbies) {
      errors.hobbies = "Required";
    } else if (values.hobbies.length < 10) {
      errors.hobbies = "Too Short";
    }

    return errors;
  };

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      firstSurname: "",
      secondSurname: "",
      nationality: "",
      phonePrefix: "",
      phone: "",
      birthDate: "",
      gender: "",
      email: "",
      address: "",
      aboutMe: "",
      drivingLicense: "",
      hobbies: "",

      num: "8",
      calle: "La Habana",
      cod_postal: "41701",
      ciudad: "Sevilla",
      pais: "España",
    },

    validate,
    onSubmit: (values) => {
      dispatch(
        Initial({
          name: name,
          firstSurname: firstSurname,
          secondSurname: secondSurname,
          nationality: nationality,
          phonePrefix: phonePrefix,
          phone: phone,
          birthDate: birthDate,
          gender: gender,
          email: email,
          address: address,
          aboutMe: aboutMe,
          drivinglicense: drivinglicense,
          hobbies: hobbies,
        })
      );
      console.log("values", values);
      
      
      
      

      /* fetch("http://192.168.1.74:8080/nbtiCV", values.text, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => console.log(res.json())); */
    },
  });
  return (

    <Container style={{ marginTop: "2em" }}>
    <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep < 1 ? (
      <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          {...formik.getFieldProps("name")}
          placeholder={user.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />
        <label>First Surname:</label>
        <input
          type="text"
          {...formik.getFieldProps("firstSurname")}
          placeholder={user.firstSurname}
          value={firstSurname}
          onChange={(e) => setfirstSurname(e.target.value)}
        />
        {formik.touched.firstSurname && formik.errors.firstSurname ? (
          <p>{formik.errors.firstSurname}</p>
        ) : null}
        <br />
        <label>Second Surname:</label>
        <input
          type="text"
          {...formik.getFieldProps("secondSurname")}
          placeholder={user.secondSurname}
          value={secondSurname}
          onChange={(e) => setsecondSurname(e.target.value)}
        />
        {formik.touched.secondSurname && formik.errors.secondSurname ? (
          <p>{formik.errors.secondSurname}</p>
        ) : null}
        <br />
        <select
          name="slector"
          onChange={(event) =>
            formik.setFieldValue("nationality", event.target.value)
          }
        >
          <option label="Select a country" />
          {languagesObtined.map((language, index) => (
            <option key={index} value={language.value} label={language.value} />
          ))}
        </select>
        <br />
        <label>Phone:</label>
        <PhonePrefixTags />
        <input
          type="text"
          {...formik.getFieldProps("phone")}
          placeholder={user.phone}
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p>{formik.errors.phone}</p>
        ) : null}
        <br />
        <label>Birth Date:</label>
        <input
          type="date"
          max="2022-01-01"
          onChange={(event) =>
            formik.setFieldValue("birthDate", event.target.value)
          }
        />
        {formik.touched.birthDate && formik.errors.birthDate ? (
          <p>{formik.errors.birthDate}</p>
        ) : null}
        <br />
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="other">Other</label>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <p>{formik.errors.gender}</p>
        ) : null}
        <br />
        <label>Email:</label>
        <input
          type="email"
          {...formik.getFieldProps("email")}
          placeholder={user.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <br />
        <label>Address:</label>
        <input
          type="text"
          {...formik.getFieldProps("address")}
          placeholder={user.address}
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        {formik.touched.address && formik.errors.address ? (
          <p>{formik.errors.address}</p>
        ) : null}
        <br />
        <label>About Me:</label>
        <br />
        <textarea
          type="text"
          {...formik.getFieldProps("aboutMe")}
          placeholder={user.aboutMe}
          value={aboutMe}
          onChange={(e) => setaboutMe(e.target.value)}
        />
        {formik.touched.aboutMe && formik.errors.aboutMe ? (
          <p>{formik.errors.aboutMe}</p>
        ) : null}
        <br />
        <select
          name="drivingLicense"
          onChange={(event) =>
            formik.setFieldValue("drivingLicense", event.target.value)
          }
        >
          <option label="Select a driving licence" />
          {drivingLicense.map((licence, index) => (
            <option key={index} value={licence} label={licence} />
          ))}
        </select>
        <br />
        <label>Hobbies:</label>
        <br />
        <textarea
          type="text"
          {...formik.getFieldProps("hobbies")}
          placeholder={user.hobbies}
          value={hobbies}
          onChange={(e) => sethobbies(e.target.value)}
        />
        {formik.touched.hobbies && formik.errors.hobbies ? (
          <p>{formik.errors.hobbies}</p>
        ) : null}
        <br />
        <br />
        <button type="submit" onClick={handleNext}>Submit</button>
        
      </form> 
      ) : activeStep === 1 ? (
        <div>
            
          <File2
            handleNext={handleNext}
            autoPopulateData={autoPopulateData}
          ></File2>
          <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleNext}
              
            >
             Siguiente
            </Button>
            <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              Volver
            </Button>
          </div>
        ) : (
            <div>
            
          <File3></File3>
          <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              Volver
            </Button>
            </div>
        )}
    </Container>
  );
}
export default File1;
