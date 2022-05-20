import React, { Component, useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Initial, selectUser, userSlice } from "redux/Slice";
import { add, del, selectVoluns } from "redux/volunteringSlice";
import { languages } from "Utils/languages";
import { FieldArray, Form, Formik, useFormik } from "formik";
import { LanguageTags, PhonePrefixTags } from "Components/tags";
import { drivingLicense } from "Utils/drivingLicenses";
import { lvllanguage } from "Utils/lvllanguage";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import File1 from "./file1"
import File2 from "./file2"
import File3 from "./file3"

export function GetSteps() {
  return ["Step1", "Step2", "Step3"];
}

export const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = GetSteps();
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
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [countrys, setCountrys] = useState("");
  const [citys, setCitys] = useState("");
  const [center, setCenter] = useState("");
  const [fieldsOfStudy, setFieldsOfStudy] = useState("");
  const [titleWork, setTitleWork] = useState("");
  const [startDateWork, setStartDateWork] = useState("");
  const [endDateWork, setEndDateWork] = useState("");
  const [countryWork, setCountrysWork] = useState("");
  const [cityWork, setCitysWork] = useState("");
  const [companyWork, setCompanyWork] = useState("");
  const [tasksWork, setTasksWork] = useState("");
  const [tongue, setTongue] = useState("");
  const [language, setLanguage] = useState("");
  const [listening, setListening] = useState("");
  const [reading, setReading] = useState("");
  const [writting, setWritting] = useState("");
  const [produc, setProduc] = useState("");
  const [interac, setInterac] = useState("");
  const [digitalSkills, setdigitalSkills] = useState("");
  const [comunicationSkills, setcomunicationSkills] = useState("");
 

  const dispatch = useDispatch();

  

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
        training: [
          {
            title: title,
            startDate: startDate,
            endDate: endDate,
            countrys: countrys,
            citys: citys,
            center: center,
            fieldsOfStudy: fieldsOfStudy,
          },
        ],
        work: [
          {
            titleWork: titleWork,
            startDateWork: startDateWork,
            endDateWork: endDateWork,
            countryWork: countryWork,
            cityWork: cityWork,
            companyWork: companyWork,
            tasksWork: tasksWork,
          },
        ],
        motherTongues: [
          {
            tongue: tongue,
          },
        ],
        otherLanguages: [
          {
            language: language,
            listening: listening,
            reading: reading,
            writting: writting,
            produc: produc,
            interac: interac,
          },
        ],
        digitalSkills: digitalSkills,
        comunicationSkills: comunicationSkills,
      })
    );
  };

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
      training: [
        {
          title: "",
          startDate: "",
          endDate: "",
          countrys: "",
          citys: "",
          center: "",
          fieldsOfStudy: "",
        },
      ],
      work: [
        {
          titleWork: "",
          startDateWork: "",
          endDateWork: "",
          countryWork: "",
          cityWork: "",
          companyWork: "",
          tasksWork: "",
        },
      ],
      motherTongues: [
        {
          tongue: "",
        },
      ],
      otherLanguages: [
        {
          language: "",
          listening: "",
          reading: "",
          writting: "",
          produc: "",
          interac: "",
        },
      ],
      digitalSkills: "",
      comunicationSkills: "",
      volunteering: [
        {
          enterpriseVolun: "",
          placeVolun: "",
          startDateVolun: "",
          endDateVolun: "",
          descriptionVolun: "",
        },
      ],
    },

    //validate,
    onSubmit: (values) => {
      console.log("values", values);
      pdfMake.createPdf(docDefinition({ ...user })).open();
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
  const initialValues = {
    training: [
      {
        title: "",
        startDate: "",
        endDate: "",
        countrys: "",
        citys: "",
        center: "",
        fieldsOfStudy: "",
      },
    ],
    work: [
      {
        titleWork: "",
        startDateWork: "",
        endDateWork: "",
        countryWork: "",
        cityWork: "",
        companyWork: "",
        tasksWork: "",
      },
    ],
    motherTongues: [
      {
        tongue: "",
      },
    ],
    otherLanguages: [
      {
        language: "",
        listening: "",
        reading: "",
        writting: "",
        produc: "",
        interac: "",
      },
    ],
    volunteering: [
      {
        enterpriseVolun: "",
        placeVolun: "",
        startDateVolun: "",
        endDateVolun: "",
        descriptionVolun: "",
      },
    ],
  };
  const user = useSelector(selectUser);
  const volun = useSelector(selectVoluns);
  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep < 1 ? (
        <>
        <File1></File1>
        <button type="submit" onClick={handleNext}>
            Submit
          </button>
          </>
      ) : activeStep === 1 ? (
        <>
        <File2></File2>
        <button type="submit" onClick={handleNext}>
            Submit
          </button>
          <button onClick={handleBack}>Volver</button>
        </>
      ) : (
        <>
        <File3></File3>

            
            <button onClick={handleBack}>Volver</button>
          
        </>
      )}
    </>
  );
};

export default Steps;
