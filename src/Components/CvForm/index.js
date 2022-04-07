import axios from "axios";
import { Field, useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect, useState } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";

function CvForm() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 5) {
      errors.name = "Nombre demasiado corto";
    }

    if (!values.lastname) {
      errors.lastname = "Requerido";
    } else if (values.lastname.length < 5) {
      errors.lastname = "Apellido demasiado corto";
    }

    if (!values.email) {
      errors.email = "Requerido";
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
      phone: "",
      birthDate: "",
      gender: "",
      email: "",
      address: "",
      aboutMe: "",
      workExperience: [],
      education: [],
      motherTonges: [],
      otherLanguages: [],
      digitalSkills: "",
      comunicationSkills: "",
      drivingLicense: "",
      hobbies: "",
      volunteering: [],
    },
    //validate,
    onSubmit: (values) => {
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
      <form onSubmit={formik.handleSubmit}>
        <label>{translate("name")}:</label>
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("firstSurname")}:</label>
        <input type="text" {...formik.getFieldProps("firstSurname")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("secondSurname")}:</label>
        <input type="text" {...formik.getFieldProps("secondSurname")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <select
          name="slector"
          onChange={(event) =>
            formik.setFieldValue("nationality", event.target.value)
          }
        >
          <option value="" label="Select a color" />
          {languagesObtined.map((language, index) => (
            <option key={index} value={language.value} label={language.value} />
          ))}
        </select>
        <br />

        <label>{translate("phone")}:</label>
        <input type="text" {...formik.getFieldProps("phone")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
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
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
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
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("email")}:</label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("address")}:</label>
        <input type="text" {...formik.getFieldProps("address")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("aboutMe")}:</label>
        <br />
        <textarea type="text" {...formik.getFieldProps("aboutMe")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
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
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default CvForm;
