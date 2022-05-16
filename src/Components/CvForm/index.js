import axios from "axios";
import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { languages } from "Utils/languages";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";

import Steps from "Steps/step";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default function CvForm() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const validate = (values) => {
    //Faltan las traducciones de los errores.
    const errors = {};
    if (!values.name) {
      errors.name = translate("required");
    } else if (values.name.length < 5) {
      errors.name = translate("tooShort");
    }

    if (!values.firstSurname) {
      errors.firstSurname = translate("required");
    } else if (values.firstSurname.length < 5) {
      errors.firstSurname = translate("tooShort");
    }

    if (!values.secondSurname) {
      errors.secondSurname = translate("required");
    } else if (values.secondSurname.length < 5) {
      errors.secondSurname = translate("tooShort");
    }

    if (!values.email) {
      errors.email = translate("required");
    }

    if (!values.phone) {
      errors.phone = translate("required");
    } else if (values.phone.length < 6) {
      errors.phone = translate("tooShort");
    }

    if (!values.birthDate) {
      errors.birthDate = translate("required");
    }

    if (!values.gender) {
      errors.gender = translate("required");
    }
    //quizas se pueda validar mejor con algun regex
    if (!values.address) {
      errors.address = translate("required");
    } else if (values.address.length < 6) {
      errors.address = translate("tooShort");
    }

    if (!values.aboutMe) {
      errors.aboutMe = translate("required");
    } else if (values.aboutMe.length < 10) {
      errors.aboutMe = translate("tooShort");
    }

    if (!values.hobbies) {
      errors.hobbies = translate("required");
    } else if (values.hobbies.length < 10) {
      errors.hobbies = translate("tooShort");
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
      phonePrefix: '',
      phone: "",
      birthDate: "",
      gender: "",
      email: "",
      address: "",
      aboutMe: "",
      digitalSkills: "",
      comunicationSkills: "",
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
      console.log("values", values);
      pdfMake.createPdf(docDefinition({ ...values })).open();

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
        endDateVolun:"",
        descriptionVolun: "",
      },
    ],
  };
  
  
  return (
    <Container style={{ marginTop: "2em" }}>
      <form onSubmit={formik.handleSubmit}>
        
        <Steps></Steps>
        
       
        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}