import React, { Component, useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Initial,selectUser, userSlice } from "redux/Slice";
import { languages } from "Utils/languages";
import { FieldArray, Form, Formik, useFormik } from "formik";
import { LanguageTags, PhonePrefixTags } from "Components/tags";
import { drivingLicense } from "Utils/drivingLicenses";
import { lvllanguage } from "Utils/lvllanguage";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";

export function GetSteps() {
  return ["Step1", "Step2", "Step3"];
}

export const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [autoPopulateData, setAutoPopulateData] = React.useState([]);
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
  const [enterpriseVolun, setenterpriseVolun] = useState("");
  const [placeVolun, setplaceVolun] = useState("");
  const [startDateVolun, setstartDateVolun] = useState("");
  const [endDateVolun, setendDateVolun] = useState("");
  const [descriptionVolun, setdescriptionVolun] = useState("");

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
        volunteering:[
          {
            enterpriseVolun: enterpriseVolun,
            placeVolun: placeVolun,
            startDateVolun: startDateVolun,
            endDateVolun: endDateVolun,
            descriptionVolun: descriptionVolun,
          },
        ],
      })
    );
  };
 
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log(data, "ON REMOVE");
  };

  const handleOnDrop = (data) => {
    console.log(data, "ON ADD");
    setAutoPopulateData(data);
    handleNext();
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
  const user = useSelector(selectUser);

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
        <form onSubmit={formik.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            {...formik.getFieldProps("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <br />
          <label>First Surname:</label>
          <input
            type="text"
            {...formik.getFieldProps("firstSurname")}
            value={firstSurname}
            onChange={(e) => setfirstSurname(e.target.value)}
          />
          {formik.touched.firstSurname && formik.errors.firstSurname ? (
            <p>{formik.errors.firstSurname}</p>
          ) : null}
          <br />
          <label>Second Surname:</label>
          <input
            type="text"
            {...formik.getFieldProps("secondSurname")}
            value={secondSurname}
            onChange={(e) => setsecondSurname(e.target.value)}
          />
          {formik.touched.secondSurname && formik.errors.secondSurname ? (
            <p>{formik.errors.secondSurname}</p>
          ) : null}
          <br />
          <select
            name="slector"
            value={nationality}
            onChange={(event) =>
              formik.setFieldValue("nationality", event.target.value)&&
             setnationality(event.target.value)}
          >
            <option label="Select a country" />
            {languagesObtined.map((language, index) => (
              <option
                key={index}
                value={language.value}
                label={language.value}
              />
            ))}
          </select>
          <br />
          <label>Phone:</label>
          <PhonePrefixTags value={phonePrefix} />
          <input
            type="text"
            {...formik.getFieldProps("phone")}
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p>{formik.errors.phone}</p>
          ) : null}
          <br />
          <label>Birth Date:</label>
          <input
            type="date"
            max="2022-01-01"
            value={birthDate}
            onChange={(event) =>
              formik.setFieldValue("birthDate", event.target.value)&&
              setbirthDate(event.target.value)
            }
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <p>{formik.errors.birthDate}</p>
          ) : null}
          <br />
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(event) =>
                formik.setFieldValue("gender", event.target.value)&&
                setgender(event.target.value)
              }
            />
            <label for="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(event) =>
                formik.setFieldValue("gender", event.target.value)&&
                setgender(event.target.value)
              }
            />
            <label for="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={(event) =>
                formik.setFieldValue("gender", event.target.value)&&
                setgender(event.target.value)
              }
            />
            <label for="other">Other</label>
          </div>
          {formik.touched.gender && formik.errors.gender ? (
            <p>{formik.errors.gender}</p>
          ) : null}
          <br />
          <label>Email:</label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <br />
          <label>Address:</label>
          <input
            type="text"
            {...formik.getFieldProps("address")}
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          {formik.touched.address && formik.errors.address ? (
            <p>{formik.errors.address}</p>
          ) : null}
          <br />
          <label>About Me:</label>
          <br />
          <textarea
            type="text"
            {...formik.getFieldProps("aboutMe")}
            value={aboutMe}
            onChange={(e) => setaboutMe(e.target.value)}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe ? (
            <p>{formik.errors.aboutMe}</p>
          ) : null}
          <br />
          <select
            name="drivingLicense"
            value={drivinglicense}
            onChange={(event) =>
              formik.setFieldValue("drivingLicense", event.target.value)&&
                setdrivinglicense(event.target.value)
            }
          >
            <option label="Select a driving licence" />
            {drivingLicense.map((licence, index) => (
              <option key={index} value={licence} label={licence} />
            ))}
          </select>
          <br />
          <label>Hobbies:</label>
          <br />
          <textarea
            type="text"
            {...formik.getFieldProps("hobbies")}
            value={hobbies}
            onChange={(e) => sethobbies(e.target.value)}
          />
          {formik.touched.hobbies && formik.errors.hobbies ? (
            <p>{formik.errors.hobbies}</p>
          ) : null}
          <br />
          <br />
          <button type="submit" onClick={handleNext}>
            Submit
          </button>
        </form>
      ) : activeStep === 1 ? (
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
                          values.training.map(
                            (training, index) => (
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
                            )
                          )}
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
                          values.otherLanguages.map(
                            (otherLanguages, index) => (
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
                                    <option
                                      value=""
                                      label="Select your level"
                                    />
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
                                    <option
                                      value=""
                                      label="Select your level"
                                    />
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
                                    <option
                                      value=""
                                      label="Select your level"
                                    />
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
                                    <option
                                      value=""
                                      label="Select your level"
                                    />
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
                                    <option
                                      value=""
                                      label="Select your level"
                                    />
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
                            )
                          )}
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
            Submit
          </button>
          <button onClick={handleBack}>Volver</button>
        </form>
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <label>Digital Skills:</label>
            <br />
            <textarea
              type="text"
              {...formik.getFieldProps("digitalSkills")}
              value={digitalSkills}
              onChange={(e) => setdigitalSkills(e.target.value)}
            />
            {formik.touched.digitalSkills && formik.errors.digitalSkills ? (
              <p>{formik.errors.digitalSkills}</p>
            ) : null}
            <br />
            <label>Comunication Skills:</label>
            <br />
            <textarea
              type="text"
              {...formik.getFieldProps("comunicationSkills")}
              value={comunicationSkills}
              onChange={(e) => setcomunicationSkills(e.target.value)}
            />
            {formik.touched.comunicationSkills &&
            formik.errors.comunicationSkills ? (
              <p>{formik.errors.comunicationSkills}</p>
            ) : null}
            <br />
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
                          values.volunteering.map(
                              (volunteering, index) => (
                                <div className="row" key={index}>
                                  <div className="col"></div>
                                  <label>Company Name:</label>
                                  <input
                                    type="text"
                                    {...formik.getFieldProps(
                                      `volunteering.${index}.enterpriseVolun`
                                    )}
                                    value={`${index}`.enterpriseVolun}
                                    onChange={(e) => setenterpriseVolun(e.target.value)}
                                  />
                                  {formik.touched.name && formik.errors.name ? (
                                    <p>{formik.errors.name}</p>
                                  ) : null}
                                  <br />
                                  <select
                                    name="slector"
                                    value={index.placeVolun}
                                    onChange={(event) =>
                                      formik.setFieldValue(
                                        `volunteering.${index}.placeVolun`
                                        
                                      )&&setplaceVolun(event.target.value)
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
                                  <label>Start Date:</label>
                                  <input
                                    type="date"
                                    max="2022-01-01"
                                    value={index.startDateVolun}
                                    onChange={(event) =>
                                      formik.setFieldValue(
                                        `volunteering.${index}.startDateVolun`,
                                        
                                      )&&setstartDateVolun(event.target.value)
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
                                    value={index.endDateVolun}
                                    onChange={(event) =>
                                      formik.setFieldValue(
                                        `volunteering.${index}.endDateVolun`
                                        
                                      )&&setendDateVolun(event.target.value)
                                    }
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
                                    onChange={(e) => setdescriptionVolun(e.target.value)}
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
                                      onClick={() => remove(index)}
                                    >
                                      Close
                                      {index}
                                    </button>
                                  </div>
                                </div>
                              )
                            )}
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
<p>
  {user.name}
  
</p>


            <button type="submit" onClick={handleNext}>
              Submit
            </button>
            <button onClick={handleBack}>Volver</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Steps;
