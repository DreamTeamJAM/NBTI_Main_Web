import StepGenerator from "registerStudent/stepGenerator";
import { levelLanguage } from "Utils/levelLanguage";

export function Step4() {
  const levelOptions = levelLanguage.map((level) => ({
    value: level,
    label: level,
  }));
  const inputs = {
    motherTongues: { type: "text" },
    otherLanguages: {
      type: "array",
      children: {
        languageName:{ type: "text" },
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
