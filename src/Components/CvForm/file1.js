import React, { useEffect } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import translate from "i18n/translate";
import { useFormik } from "formik";
import {formik, initialValues}  from "./../CvForm/index.js";
import { languages } from "Utils/languages";
import { Container } from "GlobalStyles";
import {PhonePrefixTags} from "Components/tags";

function File1() {
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

      /* fetch("http://192.168.1.74:8080/nbtiCV", values.text, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => console.log(res.json())); */
    
  });
  return (
    <Container style={{ marginTop: "2em" }}>
      <label>{translate("name")}:</label>
      <input type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}
      <br />
      <label>{translate("firstSurname")}:</label>
      <input type="text" {...formik.getFieldProps("firstSurname")} />
      {formik.touched.firstSurname && formik.errors.firstSurname ? (
        <p>{formik.errors.firstSurname}</p>
      ) : null}
      <br />
      <label>{translate("secondSurname")}:</label>
      <input type="text" {...formik.getFieldProps("secondSurname")} />
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
        <option value="" label="Select a country" />
        {languagesObtined.map((language, index) => (
          <option key={index} value={language.value} label={language.value} />
        ))}
      </select>
      <label>{translate("phone")}:</label>
        <PhonePrefixTags/>
        <input type="text" {...formik.getFieldProps("phone")} />
        {formik.touched.phone && formik.errors.phone ? (
          <p>{formik.errors.phone}</p>
        ) : null}
        <br />
      <label>{translate("birthDate")}:</label>
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
      <label>{translate("gender")}:</label>
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
        <label for="male">{translate("male")}</label>
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
        <label for="female">{translate("female")}</label>
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
        <label for="other">{translate("other")}</label>
      </div>
      {formik.touched.gender && formik.errors.gender ? (
        <p>{formik.errors.gender}</p>
      ) : null}
      <br />
      <label>{translate("email")}:</label>
      <input type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <br />
      <label>{translate("address")}:</label>
      <input type="text" {...formik.getFieldProps("address")} />
      {formik.touched.address && formik.errors.address ? (
        <p>{formik.errors.address}</p>
      ) : null}
      <br />
      <label>{translate("aboutMe")}:</label>
      <br />
      <textarea type="text" {...formik.getFieldProps("aboutMe")} />
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
        <option value="" label="Select a driving licence" />
        {drivingLicense.map((licence, index) => (
          <option key={index} value={licence} label={licence} />
        ))}
      </select>
      <br />
      <label>{translate("hobbies")}:</label>
      <br />
      <textarea type="text" {...formik.getFieldProps("hobbies")} />
      {formik.touched.hobbies && formik.errors.hobbies ? (
        <p>{formik.errors.hobbies}</p>
      ) : null}
      <br />
      <br />
    </Container>
  );
}
export default File1;
