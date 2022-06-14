import "react-tagsinput/react-tagsinput.css";
import { phonePrefixes } from "Utils/phonePrefixes";
import { useReducer, useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationHandler } from "services/formValidation";
import { inputGeneration } from "Templates/formGeneration";
import defaultImg from "assets/images/default.jpg";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { LabelForm } from "GlobalStyles";
import {
  ArrayContainer,
  ArrayDiv,
  SelectStudent,
  PhotoInput,
  InputForm,
  TextArea,
  ButtonX,
  ButtonAdd,
  TagsDiv,
  InputRadio
} from "registerStudent/styles";

export function prettify(text) {
  if(text!=undefined){
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;}
}

export function TextInput(props) {
  let finalType;
  if (props.type === undefined) finalType = "text";
  else finalType = props.type;
  return (
    <div>
      <LabelForm>{prettify(props.label)}:</LabelForm>
      <br />
      <InputForm
        {...props.formik.getFieldProps(props.label)}
        type={finalType}
        value={props.value}
        name={props.label}
        placeholder={"Enter " + prettify(props.label)}
        onChange={(e)=>{
         props.formik.handleChange(e)
          props.onChange(e)}}
      />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </div>
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
      value: "(" + p.dial_code + ")",
      label: "(" + p.code + ") " + p.dial_code,
    };
  });

  useEffect(() => {
    const phoneChange = {
      target: {
        name: props.label,
        value: phoneState.fullPhone,
      },
    }
    props.formik.handleChange(phoneChange)
    props.onChange(phoneChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneState]);

  return (
    <div>
      <LabelForm>{prettify(props.label)}:</LabelForm>
      <br />
      <SelectStudent
        value={phoneState.prefix}
        onChange={(e) => {
          phoneDispatch({ type: "prefix", value: e.target.value });
        }}
      >
        {prefixOptions.map((opt, index) => (
          <option key={index} value={opt.value} label={opt.value} />
        ))}
      </SelectStudent>
      <InputForm
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
    </div>
  );
}

export function OptionInput(props) {
  return (
    <div>
      <SelectStudent
        name={props.label}
        value={props.value}
        onChange={(e)=>{
          props.formik.handleChange(e)
          props.onChange(e)}}
      >
        <option label={`Select ${prettify(props.label)}`} />
        {props.options.map((opt, index) => (
          <option key={index} value={opt.value} label={opt.value} />
        ))}
      </SelectStudent>
      <br/>
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </div>
  );
}

export function AreaInput(props) {
  return (
    <div>
      <LabelForm>{prettify(props.label)}:</LabelForm>
      <br />
      <TextArea
        type="text"
        name={props.label}
        {...props.formik.getFieldProps(props.label)}
        value={props.value}
        onChange={(e)=>{
          props.formik.handleChange(e)
          props.onChange(e)}}
      />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </div>
  );
}

export function RadioInput(props) {
  const options = props.options;
  const listRadios = options.map((opt) => {
    return (
      <div>
        <InputRadio
          {...props.formik.getFieldProps(props.label)}
          type="radio"
          id={opt}
          name={props.label}
          value={opt}
          onChange={(e)=>{
            props.formik.handleChange(e)
            props.onChange(e)}}
          checked={opt === props.value}
        />
        <LabelForm htmlFor={opt}>{prettify(opt)}</LabelForm>
      </div>
    );
  });
  return (
    <div>
      <LabelForm>{prettify(props.label)}:</LabelForm>

      {listRadios}
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </div>
  );
}

export function TagInput(props) {
  return (
    <TagsDiv>
      <LabelForm>{prettify(props.label)}:</LabelForm>
      <br />
      <Tags
        settings={{
          enforceWhitelist: true,
          whitelist: props.whitelist,
        }}
        onChange={(e) => {
          const valueArray = e.detail.tagify.value;
          const tags = valueArray.reduce((acc, value, index) => {
            if (index === 0) {
              return acc + value.value;
            } else return acc + ", " + value.value;
          }, "");
          const tagChange = {
            target: {
              name: props.label,
              value: tags,
            },
          }
          props.formik.handleChange(tagChange)
          props.onChange(tagChange);
        }}
        //{props.value[props.label]}
        value={props.value}
      ></Tags>
      
       {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </TagsDiv>
  );
}

export function ImageInput(props) {
  const defImg = props.value !== "" ? props.value : defaultImg
  const [photo, setPhoto] = useState(defImg);

  const onFileChangeHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (FileReader && file) {
      var fr = new FileReader();
      fr.onload = function () {
        setPhoto(fr.result);
        const imageChange = {
          target: {
            name: props.label,
            value: fr.result,
          },
        }
        props.formik.handleChange(imageChange)
        props.onChange(imageChange);
      };
      fr.readAsDataURL(file);
    }
  };
  function importData() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = onFileChangeHandler;
    input.click();
  }

  return (
    <div>
      <LabelForm>{prettify(props.label)}:</LabelForm>
      <br />
      <PhotoInput
        type="image"
        className="form-control"
        alt="student"
        name="file"
        onClick={importData}
        src={photo}
      />
      <br />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
    </div>
  );
}

export function ArrayInput(props) {
  let values = [...props.values];
  const inputList = props.inputList;
  const formik = [];
  for (let i = 0; i < 10; i++) {
    const validate = (values) => validationHandler(values, inputList);

    formik.push(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useFormik({
        initialValues: { ...values[i] },
        validate,
        onSubmit: (values) => {},
      })
    );
  }

  let emptyChild = {};
  for (const [key, input] of Object.entries(inputList)) {
    emptyChild[key] = "";
  }
  const subOnChange = (e, index) => {
    const { name, value } = e.target;
    values[index] = { ...values[index], [name]: value };
    const workChange = {
      target: {
        name: props.label,
        value: values,
      },
    };
    props.onChange(workChange);
    props.formik.handleChange(workChange)
    // props.formik.setErrors({...props.formik.errors, [props.label]: ...formik[index].errors})
  };

  const formArray = values.map((element, index) => {
    return (
      <>
        <ArrayDiv className="col" key={index}>
          {inputGeneration(
            inputList,
            props.values[index],
            (e) => subOnChange(e, index),
            formik[index]
          )}

          <div className="col">
            <ButtonX
              type="button"
              className="secondary"
              onClick={() => {
                values.splice(index, 1);
                const workChange = {
                  target: {
                    name: props.label,
                    value: [...values],
                  },
                }
                props.formik.handleChange(workChange)
                props.onChange(workChange);
              }}
            >
              X
            </ButtonX>
          </div>
        </ArrayDiv>
      </>
    );
  });

  return (
    <ArrayContainer>
      <h1>{prettify(props.label)}</h1>
      <div>
        {formArray}

        <ButtonAdd
          type="button"
          className="secondary"
          onClick={() => {
            values.length < 10 &&
              props.onChange({
                target: {
                  name: props.label,
                  value: [...props.values, emptyChild],
                },
              });
          }}
        >
          Add {prettify(props.label)}
        </ButtonAdd>
        <br />
      {props.formik.touched[props.label] && props.formik.errors[props.label] ? (
        <p>{props.formik.errors[props.label]}</p>
      ) : null}
      </div>
    </ArrayContainer>
  );
}
