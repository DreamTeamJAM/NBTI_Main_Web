import React, { Component, useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Initial, selectUser, userSlice } from "redux/Slice";
import { add, del, selectVoluns } from "redux/volunteringSlice";
import { FieldArray, Form, Formik, useFormik } from "formik";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import { GetSteps } from "./step";
import { languages } from "Utils/languages"
import { Container } from "GlobalStyles";

function File3() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [autoPopulateData, setAutoPopulateData] = React.useState([]);
  const steps = GetSteps();
  const [enterpriseVolun, setenterpriseVolun] = useState("");
  const [placeVolun, setplaceVolun] = useState("");
  const [startDateVolun, setstartDateVolun] = useState("");
  const [endDateVolun, setendDateVolun] = useState("");
  const [descriptionVolun, setdescriptionVolun] = useState("");


  const dispatch = useDispatch();
  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);

  const onCleanValue = () => {
    setenterpriseVolun("");
    setplaceVolun("");
    setstartDateVolun("");
    setendDateVolun("");
    setdescriptionVolun("");
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(
        add({
          enterpriseVolun: enterpriseVolun,
          placeVolun: placeVolun,
          startDateVolun: startDateVolun,
          endDateVolun: endDateVolun,
          descriptionVolun: descriptionVolun,
        }),
        
      )
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
      pdfMake.createPdf(docDefinition({ ...user,...volun })).open();
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
    
    
      <form onSubmit={formik.handleSubmit}>
        <br />
        <label>Volunteering</label>
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
                            <div className="col">
                              <label>Company Name:</label>
                              <input
                                type="text"
                                {...formik.getFieldProps(
                                  `volunteering.${index}.enterpriseVolun`
                                )}
                                value={index.enterpriseVolun}
                                onChange={(e) =>
                                  setenterpriseVolun(e.target.value)
                                }
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />
                              <select
                                name="slector"
                                value={index.placeVolun}
                                onChange={(event) => {
                                  formik.setFieldValue(
                                    `volunteering.${index}.placeVolun`
                                  );
                                  setplaceVolun(event.target.value);
                                }}
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
                              <label>Start Date:</label>
                              <input
                                type="date"
                                max="2022-01-01"
                                value={index.startDateVolun}
                                onChange={(event) => {
                                  formik.setFieldValue(
                                    `volunteering.${index}.startDateVolun`
                                  );
                                  setstartDateVolun(event.target.value);
                                }}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>End Date:</label>
                              <input
                                type="date"
                                max="2022-01-01"
                                value={index.endDateVolun}
                                onChange={(event) => {
                                  formik.setFieldValue(
                                    `volunteering.${index}.endDateVolun`
                                  );
                                  setendDateVolun(event.target.value);
                                }}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <label>Description:</label>
                              <br />
                              <textarea
                                type="text"
                                {...formik.getFieldProps(
                                  `volunteering.${index}.descriptionVolun`
                                )}
                                onChange={(e) =>
                                  setdescriptionVolun(e.target.value)
                                }
                                value={index.descriptionVolun}
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p>{formik.errors.name}</p>
                              ) : null}
                              <br />

                              <div className="col">
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(dispatch(del(index)))}
                                >
                                  Close
                                  {index}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => {
                          push(
                            dispatch(
                              add({
                                enterpriseVolun: enterpriseVolun,
                                placeVolun: placeVolun,
                                startDateVolun: startDateVolun,
                                endDateVolun: endDateVolun,
                                descriptionVolun: descriptionVolun,
                              }),
                              onCleanValue()
                            )
                          );
                        }}
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
        <input type="file" id="file-input" name="image" accept="image/*" />
        <br />
        <br />
        <p>{user.name}</p>
        <button type="submit" onClick={handleNext}>
              Submit
            </button>
      </form>
      
           
  );
}

export default File3;
