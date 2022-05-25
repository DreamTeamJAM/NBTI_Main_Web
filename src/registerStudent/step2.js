import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setToAmount,
} from 'redux/stepSlice';
import { updateStudent,selectStudent } from 'redux/studentSlice';
import {ArrayInput} from "Templates/inputComponent"


const Step2 = () => {
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
    
    const initialValues = student.workExperience.length > 0 ?
     {workExperience: student.workExperience} : {
      workExperience: [
        {
          title: '',
          startDate: '',
        },
      ],
    };

function iterateElement(element){
  const elementHtml = []
  for (const [key, input] of Object.entries(element)) {
    let currentInput = (<>
      <label>{key}</label>
          <Field
              name={key}
              type="text"
                        />
                        </>
    );
    elementHtml.push(currentInput);
  }
  return elementHtml
}


  return (
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
          <ArrayInput
          values={values}
          label="workExperience"
          ></ArrayInput>
          {/* <h1>Work Experience</h1>
          <FieldArray name="workExperience">
            {({ insert, remove, push }) => (
              <div>
                {values.workExperience.length > 0 &&
                  values.workExperience.map((workExperience, index) => (
                    <div className="row" key={index}>
                      {iterateElement(workExperience)}
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
                  onClick={() => push({ title: '', startDate: '' })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray> */}
          <button type="submit" onClick={() => {
              dispatch(increment())
              //save cosas
          }} >next</button>
          <button type="submit" onClick={(e) => {
                dispatch(decrement())
                dispatch(updateStudent(values))
          }} >back</button>
        </Form>
      )}
    </Formik>
  </div>
)};

export default Step2;
