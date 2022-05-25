import {PhoneInput, TextInput, RadioInput, OptionInput, AreaInput} from "./inputComponent"


export function inputGeneration (inputs,basicInfo,updateBasicInfo,formik,){
    const inputHtml = []

    for (const [key, input] of Object.entries(inputs)) {
      let currentInput;
      switch (input.type) {
        case "radio":
          currentInput =(<><RadioInput
          label={key} 
          value = {basicInfo[key]}
          onChange={updateBasicInfo} 
          options = {input.options}
           formik={formik}
          ></RadioInput>
          <br/></>
          );
          break;
          case "option":
            currentInput =(<><OptionInput
              label={key} 
              value = {basicInfo[key]}
              onChange={updateBasicInfo} 
              options = {input.options}
               formik={formik}
              ></OptionInput>
              <br/></>);
              break;
          case "textarea":
            currentInput = (<><AreaInput
              label={key}
              type = {input.type}
              value={basicInfo[key]} 
              onChange={updateBasicInfo} 
              formik={formik}/>
              <br/></>) 
            break;
          case "phone":
            currentInput = (
            <>
            <PhoneInput
            label={key}
            type = {input.type}
            value={basicInfo[key]} 
            onChange={updateBasicInfo} 
            formik={formik}/>
            <br/></>) 
            break;

          default:
            currentInput = (<><TextInput
            label={key}
            type = {input.type}
            value={basicInfo[key]} 
            onChange={updateBasicInfo} 
            formik={formik}/>
            <br/></>) 
            break;
      }
      inputHtml.push(currentInput)
    }
    return inputHtml;
    
}