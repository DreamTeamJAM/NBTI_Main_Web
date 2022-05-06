import axios from "axios";
import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import { lvllanguage } from "Utils/lvllanguage";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import Tags from "Components/tags";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
function CvForm() {
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
        <br />
        <label>{translate("phone")}:</label>
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

        <Tags></Tags>

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
        {formik.touched.comunicationSkills &&
        formik.errors.comunicationSkills ? (
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
                            endDateVolun:"",
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

        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default CvForm;
