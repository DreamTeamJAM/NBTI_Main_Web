import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Container } from "GlobalStyles";
import { languages } from "Utils/languages";
import { useFormik } from "formik";
import { selectUser, Tertiary } from "redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function File3() {
  const [digitalSkills, setdigitalSkills] = useState("");
  const [comunicationSkills, setcomunicationSkills] = useState("");
  const [enterpriseVolun, setenterpriseVolun] = useState("");
  const [placeVolun, setplaceVolun] = useState("");
  const [startDateVolun, setstartDateVolun] = useState("");
  const [endDateVolun, setendDateVolun] = useState("");
  const [descriptionVolun, setdescriptionVolun] = useState("");

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
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
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

    validate,
    onSubmit: (values) => {
      dispatch(
        Tertiary({
          digitalSkills: digitalSkills,
          comunicationSkills: comunicationSkills,
          volunteering: [
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

  return (
    <Container style={{ marginTop: "2em" }}>
      <form onSubmit={formik.handleSubmit}>
        <label>Digital Skills:</label>
        <br />
        <textarea
          type="text"
          {...formik.getFieldProps("digitalSkills")}
          placeholder={user.digitalSkills}
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
          placeholder={user.comunicationSkills}
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
            initialValues={formik}
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
                      {values.initialValues.volunteering.length > 0 &&
                        values.initialValues.volunteering.map(
                          (volunteering, index) => (
                            <div className="row" key={index}>
                              <div className="col"></div>
                              <label>company Name:</label>
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
                              <label>Start Date:</label>
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

                              <label>End Date:</label>
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

                              <label>Description:</label>
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
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
export default File3;
