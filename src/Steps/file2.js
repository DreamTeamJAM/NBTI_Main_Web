import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { FieldArray, Form, Formik, useFormik } from "formik";
import { Initial } from "redux/Slice";
import { GetSteps } from './step';
import { LanguageTags, PhonePrefixTags } from "Components/tags";
import { lvllanguage } from "Utils/lvllanguage";
import { Container } from "GlobalStyles";

function File2() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [autoPopulateData, setAutoPopulateData] = React.useState([]);
    const steps = GetSteps();
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

  const dispatch = useDispatch();
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(
      Initial({
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
      })
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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

  return (
    
    <form onSubmit={formik.handleSubmit}>
          <label>Work Experience:</label>
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
                                <label>Title:</label>
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

                                <label>Start Date:</label>
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

                                <label>End Date:</label>
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

                                <label>City:</label>
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

                                <label>Company Name:</label>
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

                                <label>Tasks:</label>
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
                                  Close
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
                          Add
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </Form>
              )}
            </Formik>
          </div>
          <br />
          <label>Vocational Training:</label>
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
                                  Title:
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

                                <label>Start Date:</label>
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

                                <label>End Date:</label>
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

                                <label>City:</label>
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

                                <label>Center:</label>
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

                                <label>Fields Of Study:</label>
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
                                  Close
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
                          Add
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </Form>
              )}
            </Formik>
          </div>
          <br />
          <label>Mother Tongue</label>
          <br />

          <LanguageTags></LanguageTags>

          <br />
          <label>Other Language</label>
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
                                <label>Language:</label>
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
                                <label>Listening:</label>
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
                                    <option
                                      key={index}
                                      value={lvl}
                                      label={lvl}
                                    />
                                  ))}
                                </select>
                                <br />
                                <br />
                                <label>Reading:</label>
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
                                    <option
                                      key={index}
                                      value={lvl}
                                      label={lvl}
                                    />
                                  ))}
                                </select>
                                <br />
                                <br />
                                <label>Writting:</label>
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
                                    <option
                                      key={index}
                                      value={lvl}
                                      label={lvl}
                                    />
                                  ))}
                                </select>
                                <br />
                                <br />
                                <label>Spoken Production:</label>
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
                                    <option
                                      key={index}
                                      value={lvl}
                                      label={lvl}
                                    />
                                  ))}
                                </select>
                                <br />
                                <br />
                                <label>Spoken Interaction:</label>
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
                                    <option
                                      key={index}
                                      value={lvl}
                                      label={lvl}
                                    />
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
                                  Close
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
                          Add
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </Form>
              )}
            </Formik>
          </div>
          <button type="submit" onClick={handleNext}>
            Save
          </button>
        </form>
        
  )
}

export default File2