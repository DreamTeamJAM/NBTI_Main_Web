import "react-tagsinput/react-tagsinput.css";
import Select from "react-select";
import {phonePrefixes} from "Utils/phonePrefixes"
import {useReducer,useEffect} from "react"
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';


function prettify(text){
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}

export function TextInput(props){
    let finalType;
    if (props.type === undefined)
        finalType = "text"
        else finalType = props.type
   return (
       <>
        <label>{prettify(props.label)}:</label>
        <input
            type={finalType}
            value={props.value}
            name = {props.label}
            onChange={props.onChange}
        />
        {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
        ) : null}
        </>
   )
}

export function PhoneInput(props){
    const [initPref, initPhone] = props.value.split(" ")
    const initialState = {
        prefix: initPref,
        phone: initPhone,
        fullPhone: props.value
};

function reducer(state, action) {
        const nextState = {...state,[action.type]: action.value }
        nextState["fullPhone"] = nextState.prefix + " " + nextState.phone
        return nextState; 

  }

  const [phoneState, phoneDispatch] = useReducer(reducer, initialState);

    const prefixOptions = phonePrefixes.map(p => {
    
        return {
          value: p.dial_code,
          label: "(" + p.code + ") " + p.dial_code
  
        } 
    })
   
useEffect(() => {
    props.onChange({target: {
        name: props.label,
        value: phoneState.fullPhone
    }
})
console.log("prefix", phoneState)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneState]);

   return (
       <>
        <label>{prettify(props.label)}:</label>
        <select
              value={phoneState.prefix}
              onChange={(e)=>{
                phoneDispatch({type: "prefix", value : e.target.value})
                
                
    }}>
        {prefixOptions.map((opt, index) => (
              <option
                key={index}
                value={opt.value}
                label={opt.value}
              />
            ))}
            </select>
        <input
            type="text"
            value={phoneState.phone}
            name = {props.label}
            onChange={(e) =>{
                phoneDispatch({type: "phone", value : e.target.value})
                
    }
}
        />
        {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
        ) : null}
        </>
   )
}

export function OptionInput(props){
    return (<select
            name={props.label}
            value={props.value}
            onChange={props.onChange}
          >
            <option label={`Select ${prettify(props.label)}`} />
            {props.options.map((opt, index) => (
              <option
                key={index}
                value={opt.value}
                label={opt.value}
              />
            ))}
          </select>
    )
}

export function AreaInput(props){
    return(<>
    <label>{prettify(props.label)}:</label>
        <br />
    <textarea
          type="text"
          name={props.label}
        //   {...formik.getFieldProps("comunicationSkills")}
          value={props.value}
          onChange={props.onChange}
        />
        {props.formik.touched[props.label] &&
        props.formik.errors[props.label] ? (
          <p>{props.formik.errors[props.label]}</p>
        ) : null}
    </>)
}

export function RadioInput(props){
    const options = props.options
    const listRadios =  options.map((opt) =>
       {
       return (
       <div>
            <input
              type="radio"
              id={opt}
              name={props.label}
              value={opt}
              onChange={props.onChange}
              checked={opt === props.value}
              
            />
            <label for={opt}>{prettify(opt)}</label>
          </div>
       )})
    return (
    <>
    <label>{prettify(props.label)}:</label>
       
          {listRadios}
          {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
            <p>{props.formik.errors[props.label]}</p>
          ) : null}
    </>
    )
}

export function ArrayInput ({...props}){
const values = props.values;
  return (
  <>
  <h1>{prettify(props.label)}</h1>
  <FieldArray name={props.label}>
    {({remove, push }) => (
      <div>
        {values[props.label].length > 0 &&
          values[props.label].map((element, index) => (
            <div className="row" key={index}>
              <div className="col">
                <label htmlFor={`${values[props.label]}.${index}.title`}>Title</label>
                <Field
                  name={`element.${index}title`}
                  type="text"
                  onChange={() => {
console.log(element)
                  }}
                />
                <ErrorMessage
                  name={`${values[props.label]}.${index}.title`}
                  component="div"
                  className="field-error"
                />
              </div>
              <div className="col">
                <label htmlFor={`workExperience.${index}.startDate`}>Start Date</label>
                <Field
                  name={`workExperience.${index}.startDate`}
                  type="date"
                />
                <ErrorMessage
                  name={`workExperience.${index}.startDate`}
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
          onClick={() => push({ title: '', startDate: '' })}
        >
          Add Friend
        </button>
      </div>
    )}
  </FieldArray>
  </>
  )
}