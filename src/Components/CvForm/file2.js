import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import translate from "i18n/translate";
import { lvllanguage } from "Utils/lvllanguage";
import {LanguageTags, PhonePrefixTags} from "Components/tags";
import { useFormik } from "formik";
import {formik, initialValues} from "./../CvForm/index.js";
import { languages } from "Utils/languages";
import { Container } from "GlobalStyles";

function File2(){
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
                                    `work.${index}.countryWork`,
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
        <br />
        <label>{translate("motherTongue")}</label>
        <br />

        <LanguageTags></LanguageTags>

        <br />
        <label>{translate("otherlanguage")}</label>
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
                <FieldArray name="otherLanguages">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.otherLanguages.length > 0 &&
                        values.otherLanguages.map((otherLanguages, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <br />
                              <br />
                              <label>{translate("language")}:</label>
                              <br />
                              <select
                                name="slector"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.language`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select a Place" />
                                {languagesObtined.map((language, index) => (
                                  <option
                                    key={index}
                                    value={language.value}
                                    label={language.value}
                                  />
                                ))}
                              </select>
                              <br />

                              <br />
                              <label>{translate("listening")}:</label>
                              <br />
                              <select
                                name="lvllanguage"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.listening`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select your level" />
                                {lvllanguage.map((lvl, index) => (
                                  <option key={index} value={lvl} label={lvl} />
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>{translate("reading")}:</label>
                              <br />
                              <select
                                name="lvllanguage"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.reading`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select your level" />
                                {lvllanguage.map((lvl, index) => (
                                  <option key={index} value={lvl} label={lvl} />
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>{translate("writting")}:</label>
                              <br />
                              <select
                                name="lvllanguage"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.writting`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select your level" />
                                {lvllanguage.map((lvl, index) => (
                                  <option key={index} value={lvl} label={lvl} />
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>{translate("produc")}:</label>
                              <br />
                              <select
                                name="lvllanguage"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.produc`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select your level" />
                                {lvllanguage.map((lvl, index) => (
                                  <option key={index} value={lvl} label={lvl} />
                                ))}
                              </select>
                              <br />
                              <br />
                              <label>{translate("interac")}:</label>
                              <br />
                              <select
                                name="lvllanguage"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    `otherLanguages.${index}.interac`,
                                    event.target.value
                                  )
                                }
                              >
                                <option value="" label="Select your level" />
                                {lvllanguage.map((lvl, index) => (
                                  <option key={index} value={lvl} label={lvl} />
                                ))}
                              </select>
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
                            language: "",
                            listening: "",
                            reading: "",
                            writting: "",
                            produc: "",
                            interac: "",
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
</Container>

      );

      
}
export default File2;