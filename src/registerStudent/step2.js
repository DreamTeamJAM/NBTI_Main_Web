import StepGenerator from "registerStudent/stepGenerator";
import { languages } from "Utils/languages";
import {
  StudentContainer,
  ContainerStudent,
  Margin,
  ArrayContainer
} from "registerStudent/styles";

export function Step2() {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
  const inputs={
    workExperience:{
      type:"array",
      validation: "array",
      children:{
        "title": {type:"text",
          "validation":"text"},
      "startDate":{type:"date",validation : "basic"},
      "endDate":{type:"date",validation : "basic"},
      "country":{type: "option",
                        options : nationalityOptions,
                        validation : "basic"},
       "city": {type:"text",
               "validation":"text"},
       "company": {type:"text",
                  validation:"text"},
       "tasks": {type:"textarea", validation: "text"}
      }
  }
  }
  return (
    <>
    
      <StepGenerator isInput={true} inputMap={inputs} />
      
    </>
  );
}
export default Step2;
