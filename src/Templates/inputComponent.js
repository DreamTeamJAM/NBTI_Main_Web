import "react-tagsinput/react-tagsinput.css";
import { phonePrefixes } from "Utils/phonePrefixes";
import { useReducer, useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationHandler } from "services/formValidation";
import {inputGeneration} from "Templates/formGeneration"
import defaultImg from "assets/images/default.jpg";
export function prettify(text) {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

export function TextInput(props) {
  let finalType;
  if (props.type === undefined) finalType = "text";
  else finalType = props.type;
  return (
    <>
      <label>{prettify(props.label)}:</label>
      <input
       {...props.formik.getFieldProps(props.label)}
        type={finalType}
        value={props.value}
        name={props.label}
        onChange={props.onChange}
      />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </>
  );
}

export function PhoneInput(props) {
  const [initPref, initPhone] = props.value.split(" ");
  const initialState = {
    prefix: initPref,
    phone: initPhone,
    fullPhone: props.value,
  };

  function reducer(state, action) {
    const nextState = { ...state, [action.type]: action.value };
    nextState["fullPhone"] = nextState.prefix + " " + nextState.phone;
    return nextState;
  }

  const [phoneState, phoneDispatch] = useReducer(reducer, initialState);

  const prefixOptions = phonePrefixes.map((p) => {
    return {
      value: "("+p.dial_code+")",
      label: "(" + p.code + ") " + p.dial_code,
    };
  });

  useEffect(() => {
    props.onChange({
      target: {
        name: props.label,
        value: phoneState.fullPhone,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneState]);

  return (
    <>
      <label>{prettify(props.label)}:</label>
      <select
        value={phoneState.prefix}
        onChange={(e) => {
          phoneDispatch({ type: "prefix", value: e.target.value });
        }}
      >
        {prefixOptions.map((opt, index) => (
          <option key={index} value={opt.value} label={opt.value} />
        ))}
      </select>
      <input
      {...props.formik.getFieldProps(props.label)}
        type="text"
        value={phoneState.phone}
        name={props.label}
        onChange={(e) => {
          phoneDispatch({ type: "phone", value: e.target.value });
        }}
      />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </>
  );
}

export function OptionInput(props) {
  return (
    <select name={props.label} value={props.value} onChange={props.onChange}>
      <option label={`Select ${prettify(props.label)}`} />
      {props.options.map((opt, index) => (
        <option key={index} value={opt.value} label={opt.value} />
      ))}
    </select>
  );
}

export function AreaInput(props) {
  return (
    <>
      <label>{prettify(props.label)}:</label>
      <br />
      <textarea
        type="text"
        name={props.label}
        {...props.formik.getFieldProps(props.label)}
        value={props.value}
        onChange={props.onChange}
      />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </>
  );
}

export function RadioInput(props) {
  const options = props.options;
  const listRadios = options.map((opt) => {
    return (
      <div>
        <input
         {...props.formik.getFieldProps(props.label)}
          type="radio"
          id={opt}
          name={props.label}
          value={opt}
          onChange={props.onChange}
          checked={opt === props.value}
        />
        <label htmlFor={opt}>{prettify(opt)}</label>
      </div>
    );
  });
  return (
    <>
      <label>{prettify(props.label)}:</label>

      {listRadios}
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </>
  );
}

export function ImageInput(props){

  const [photo, setPhoto] = useState(defaultImg)
  
  const onFileChangeHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0]
    console.log(e.target.files)
   console.log("file: ",file)
  
    
    if (FileReader && file) {
      var fr = new FileReader();
      fr.onload = function () {
         setPhoto(fr.result);
         props.onChange({
          target: {
            name: props.label,
            value: fr.result
          }
        })
      }
      fr.readAsDataURL(file);
    }
    
  }
  function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = onFileChangeHandler;
    input.click();
    
  }

  return (
    <>
      <label>{prettify(props.label)}:</label>
      <input type="image" className="form-control" alt="student" name="file" onClick={importData} src ={photo}/>
      <br/>
      
         
    </>
  )
}

export function ArrayInput(props) {
  let values = [...props.values];
  const inputList = props.inputList
  const formik = [];
 for (let i = 0; i <10; i++){
  const validate = () => validationHandler(values[i],inputList)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  formik.push(useFormik({
    initialValues: {...values[i]},
    validate,
    onSubmit: (values) => {}}));
 };

  let emptyChild = {}
  for (const [key, input] of Object.entries(inputList)) {
    emptyChild[key] = "";
  }
  const subOnChange = (e,index) =>{
    const {name, value} = e.target;
    values[index] = {...values[index], [name] : value}
    props.onChange({target:{
      name: props.label,
      value: values
    }})
  }


  const formArray = values.map((element, index) => {
   
    return (<div className="row" key={index}>
      {inputGeneration(inputList,props.values[index],(e) => subOnChange(e,index),formik[index])}
      
      <div className="col">
        <button
          type="button"
          className="secondary"
          onClick={() =>{
            values.splice(index,1)
            props.onChange({target: {
            name: props.label,
            value: [...values]
          }}) }}
        >
          X
        </button>
      </div>
    </div>
  )})


  return (
    <>
      <h1>{prettify(props.label)}</h1>
          <div>
            {formArray}
            <button
              type="button"
              className="secondary"
              onClick={() => {values.length < 10 &&
                 props.onChange({target: {
                name: props.label,
                value: [...props.values,emptyChild]
              }}) }}
            >
              Add {prettify(props.label)}
            </button>
          </div>
    </>
  );
}
