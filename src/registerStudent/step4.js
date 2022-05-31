import StepGenerator from "registerStudent/stepGenerator";
import { levelLanguage } from "Utils/levelLanguage";
import {tongueLvl} from "Utils/Tongue"

export function Step4() {
  const levelOptions = levelLanguage.map((level) => ({
    value: level,
    label: level,
  }));
  const langWhitelist = tongueLvl.map((element, index)=> element.value)
  const inputs = {
    motherTongues: { type: "tags",
                    whitelist: langWhitelist },
    otherLanguages: {
      type: "array",
      children: {
        languageName:{ type: "option",
        options: tongueLvl,
        validation: "basic", },
        listening: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
        reading: { type: "option", options: levelOptions, validation: "basic" },
        writing: { type: "option", options: levelOptions, validation: "basic" },
        spokenProduction: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
        spokenInteraction: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
      },
    },
  };
  return (
    <>
      <StepGenerator inputMap={inputs} />
    </>
  );
}
export default Step4;
