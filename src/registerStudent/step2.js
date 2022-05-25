import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setToAmount } from "redux/stepSlice";
import { updateStudent, selectStudent } from "redux/studentSlice";

const Step2 = () => {
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);

  const initialValues =
    student.work.length > 0
      ? { work: student.work }
      : {
          work: [
            {
              title: "",
              startDate: "",
            },
          ],
        };
  return (
    <div>
      <h1>Work Experience</h1>
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
                          <label htmlFor={`work.${index}.title`}>Title</label>
                          <Field name={`work.${index}.title`} type="text" />
                          <ErrorMessage
                            name={`work.${index}.title`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor={`friends.${index}.startDate`}>
                            Start Date
                          </label>
                          <Field name={`work.${index}.startDate`} type="date" />
                          <ErrorMessage
                            name={`work.${index}.startDate`}
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
                    onClick={() => push({ title: "", startDate: "" })}
                  >
                    Add Friend
                  </button>
                </div>
              )}
            </FieldArray>
            {/* <button type="submit" onClick={() => {
              dispatch(increment())
              //save cosas
          }} >next</button> */}
            <button
              type="submit"
              onClick={(e) => {
                dispatch(decrement());
                dispatch(updateStudent(values));
              }}
            >
              back
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step2;
