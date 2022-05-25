import React,{useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setToAmount,
} from 'redux/stepSlice';
import { updateStudent,selectStudent } from 'redux/studentSlice';
import { languages } from "Utils/languages"


const Step3 = () => {

    const dispatch = useDispatch();
    const student = useSelector(selectStudent)
    
    const initialValues = student.education.length > 0 ?
     {education: student.education} : {
      education: [
        {
            title: '',
            startDate: '',
            endDate: '',
            country:'' ,
            city:'' ,
            center: '',
            fieldsOfStudy: ''
        },
      ],
    };
    const [languagesObtined, setLanguagesObtined] = React.useState([]);
  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);
  return (
  <div>
    <h1>Education & Training</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="education">
            {({ insert, remove, push }) => (
              <div>
                {values.education.length > 0 &&
                  values.education.map((education, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`education.${index}.title`}>Title</label>
                        <Field
                          name={`education.${index}.title`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`education.${index}.title`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.startDate`}>Start Date</label>
                        <Field
                          name={`education.${index}.startDate`}
                          type="date"
                        />
                        <ErrorMessage
                          name={`education.${index}.startDate`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.endDate`}>End Date</label>
                        <Field
                          name={`education.${index}.endDate`}
                          type="date"
                        />
                        <ErrorMessage
                          name={`education.${index}.endDate`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.country`}>Country</label>
                        <select
                                  name={`education.${index}.country`} 
                                >
                                  <option value=""  label="Select a Country" />
                                  {languagesObtined.map((language, index) => (
                                    <option
                                      key={index}
                                      value={language.value}
                                      label={language.value}
                                      
                                    />
                                  ))}
                                </select>
                        <ErrorMessage
                          name={`education.${index}.country`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.city`}>City</label>
                        <Field
                          name={`education.${index}.city`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`education.${index}.city`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.center`}>Center</label>
                        <Field
                          name={`education.${index}.center`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`education.${index}.center`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`education.${index}.fieldsOfStudy`}>Fields Of Study:</label>
                        <Field
                          name={`education.${index}.fieldsOfStudy`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`education.${index}.fieldsOfStudy`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ title: '',
                              startDate: '',
                              endDate: '',
                              country:'' ,
                              city:'' ,
                              center: '',
                              fieldsOfStudy: ''})}
                >
                  Add 
                </button>
              </div>
            )}
          </FieldArray>
          {/* <button type="submit" onClick={() => {
              dispatch(increment())
              //save cosas
          }} >next</button> */}
          <button type="submit" onClick={(e) => {
                dispatch(decrement())
                dispatch(updateStudent(values))
          }} >back</button>
          <button type="submit" onClick={() => {
              dispatch(increment())
              dispatch(updateStudent(values))
              //save cosas
          }} >next</button>
        </Form>
      )}
    </Formik>
  </div>
)};

export default Step3