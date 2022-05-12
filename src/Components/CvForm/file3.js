import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import translate from "i18n/translate";
import { Container } from "GlobalStyles";
import { languages } from "Utils/languages";
import { useFormik } from "formik";
import { formik, initialValues } from "./../CvForm/index.js";
function File3() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);
  const validate = (values) => {
    //Faltan las traducciones de los errores.
    const errors = {};
  }
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
      <label>{translate("digitalSkills")}:</label>
      <br />
      <textarea type="text" {...formik.getFieldProps("digitalSkills")} />
      {formik.touched.digitalSkills && formik.errors.digitalSkills ? (
        <p>{formik.errors.digitalSkills}</p>
      ) : null}
      <br />
      <label>{translate("comunicationSkills")}:</label>
      <br />
      <textarea type="text" {...formik.getFieldProps("comunicationSkills")} />
      {formik.touched.comunicationSkills && formik.errors.comunicationSkills ? (
        <p>{formik.errors.comunicationSkills}</p>
      ) : null}
      <br />
      <br />
      <label>{translate("volunteering")}</label>
      <br />
      <br />
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="volunteering">
                {({ insert, remove, push }) => (
                  <div>
                    {values.volunteering.length > 0 &&
                      values.volunteering.map((volunteering, index) => (
                        <div className="row" key={index}>
                          <div className="col"></div>
                          <label>{translate("companyName")}:</label>
                          <input
                            type="text"
                            {...formik.getFieldProps(
                              `volunteering.${index}.enterpriseVolun`
                            )}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <p>{formik.errors.name}</p>
                          ) : null}
                          <br />
                          <select
                            name="slector"
                            onChange={(event) =>
                              formik.setFieldValue(
                                `volunteering.${index}.placeVolun`,
                                event.target.value
                              )
                            }
                          >
                            <option value="" label="Select a Country" />
                            {languagesObtined.map((language, index) => (
                              <option
                                key={index}
                                value={language.value}
                                label={language.value}
                              />
                            ))}
                          </select>
                          <br />
                          <label>{translate("startDate")}:</label>
                          <input
                            type="date"
                            max="2022-01-01"
                            onChange={(event) =>
                              formik.setFieldValue(
                                `volunteering.${index}.startDateVolun`,
                                event.target.value
                              )
                            }
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <p>{formik.errors.name}</p>
                          ) : null}
                          <br />

                          <label>{translate("endDate")}:</label>
                          <input
                            type="date"
                            max="2022-01-01"
                            onChange={(event) =>
                              formik.setFieldValue(
                                `volunteering.${index}.endDateVolun`,
                                event.target.value
                              )
                            }
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <p>{formik.errors.name}</p>
                          ) : null}
                          <br />

                          <label>{translate("descriptionVolun")}:</label>
                          <br />
                          <textarea
                            type="text"
                            {...formik.getFieldProps(
                              `volunteering.${index}.descriptionVolun`
                            )}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <p>{formik.errors.name}</p>
                          ) : null}
                          <br />

                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              {translate("close")}
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() =>
                        push({
                          enterpriseVolun: "",
                          placeVolun: "",
                          startDateVolun: "",
                          endDateVolun: "",
                          descriptionVolun: "",
                        })
                      }
                    >
                      {translate("add")}
                    </button>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <input type="file" id="file-input" name="image" accept="image/*" />
      <br />
      <br />
    </Container>
  );
}
export default File3;
