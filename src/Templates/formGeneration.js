import {PhoneInput,ArrayInput, TextInput, RadioInput, OptionInput, AreaInput} from "./inputComponent"


export function inputGeneration (inputs,values,onChange,formik){
    const inputHtml = []
  console.log(formik)
    for (const [key, input] of Object.entries(inputs)) {
      let currentInput;
      switch (input.type) {
        case "radio":
          currentInput =(<><RadioInput
          label={key} 
          value = {values[key]}
          onChange={onChange} 
          options = {input.options}
           formik={formik}
          ></RadioInput>
          <br/></>
          );
          break;
          case "option":
            currentInput =(<><OptionInput
              label={key} 
              value = {values[key]}
              onChange={onChange} 
              options = {input.options}
               formik={formik}
              ></OptionInput>
              <br/></>);
              break;
          case "textarea":
            currentInput = (<><AreaInput
              label={key}
              type = {input.type}
              value={values[key]} 
              onChange={onChange} 
              formik={formik}/>
              <br/></>) 
            break;
          case "phone":
            currentInput = (
            <>
            <PhoneInput
            label={key}
            type = {input.type}
            value={values[key]} 
            onChange={onChange} 
            formik={formik}/>
            <br/></>) 
            break;
            case "array":
            currentInput = (
            <>
            <ArrayInput
            label={key}
            inputList = {input.children}
            values={values[key]} 
            onChange={onChange}
            formik={formik}
            />
            <br/></>) 
            break;

          default:
            currentInput = (<><TextInput
            label={key}
            type = {input.type}
            value={values[key]} 
            onChange={onChange} 
            formik={formik}/>
            <br/></>) 
            break;
      }
      inputHtml.push(currentInput)
    }
    return inputHtml;
    
}