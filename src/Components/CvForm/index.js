import axios from "axios";
import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
      motherTonges: [],
      otherLanguages: [],
      digitalSkills: "",
      comunicationSkills: "",
      drivingLicense: "",
      hobbies: "",
      volunteering: [],

      num: "8",
      calle: "La Habana",
      cod_postal: "41701",
      ciudad: "Sevilla",
      pais: "España",

      idioma: "Español",
      idioma2: "Francés",
      lenguaje: "Inglés",
      listening: "B1",
      reading: "B1",
      writting: "B1",
      produc: "B1",
      interac: "B1",

      skills:
        "Microsoft Office, Microsoft Word, Microsoft Excel, Outlook, Facebook, Google / Graphics Design Adobe Photoshop Sketchup / Canva and GIMP / Social Media/Social Network",
      interskills: "Trabajador",
      interskills1: "Paciente",
      interskills2: "Responsable",
    },

    //validate,
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
  };

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
          <option value="" label="Select a country" />
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
        <br />
        <label>{translate("workExperience")}:</label>
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
                <FieldArray name="work">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.work.length > 0 &&
                        values.work.map((work, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label>{translate("title")}:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `work.${index}.titleWork`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("startDate")}:</label>
                              <input
                                type="date"
                                max="2022-01-01"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `work.${index}.startDateWork`,
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
                                    `work.${index}.endDateWork`,
                                    event.target.value
                                  )
                                }
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />
                              <select
                                name="slector"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `work.${index}.countryscountryWork`,
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

                              <label>{translate("city")}:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `work.${index}.cityWork`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("companyName")}:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `work.${index}.companyWork`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("tasks")}:</label>
                              <br />
                              <textarea
                                type="text"
                                {...formik.getFieldProps(
                                  `work.${index}.tasksWork`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />
                            </div>

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
                            titleWork: "",
                            startDateWork: "",
                            endDateWork: "",
                            countryWork: "",
                            cityWork: "",
                            companyWork: "",
                            tasksWork: "",
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
        <label>{translate("vocationalTraining")}:</label>
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
                <FieldArray name="training">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.training.length > 0 &&
                        values.training.map((training, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label htmlFor={`training.${index}.title`}>
                                {translate("title")}:
                              </label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `training.${index}.title`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("startDate")}:</label>
                              <input
                                type="date"
                                max="2022-01-01"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `training.${index}.startDate`,
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
                                    `training.${index}.endDate`,
                                    event.target.value
                                  )
                                }
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />
                              <select
                                name="slector"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `training.${index}.countrys`,
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

                              <label>{translate("city")}:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `training.${index}.citys`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("center")}:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `training.${index}.center`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>{translate("fieldsOfStudy")}:</label>
                              <br />
                              <textarea
                                type="text"
                                {...formik.getFieldProps(
                                  `training.${index}.fieldsOfStudy`
                                )}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />
                            </div>

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
                            title: "",
                            startDate: "",
                            endDate: "",
                            countrys: "",
                            citys: "",
                            center: "",
                            fieldsOfStudy: "",
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
        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default CvForm;
