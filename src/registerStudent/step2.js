import StepGenerator from "registerStudent/stepGenerator";
import { languages } from "Utils/languages";

export function Step2() {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
  const inputs={
    workExperience:{
      type:"array",
      children:{
        "title": {type:"text"},
      "startDate":{type:"date"},
      "endDate":{type:"date"},
      "country":{type: "option",
                        options : nationalityOptions,
                        validation : "basic"},
       "city": {type:"text"},
       "company": {type:"text"},
       "tasks": {type:"textarea"},
      }
  }
  }
  return (
    <>
      <StepGenerator inputMap={inputs} />
    </>
  );
}
export default Step2;
