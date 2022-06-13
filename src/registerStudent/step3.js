import StepGenerator from "registerStudent/stepGenerator";
import { languages } from "Utils/languages";

export function Step3() {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
  const inputs = {
    education: {
      type: "array",
      validation: "array",
      min: 1,
      children: {
        title: { type: "text", validation: "text" },
        startDate: { type: "date", validation: "basic" },
        endDate: { type: "date", validation: "basic"  },
        country: {
          type: "option",
          options: nationalityOptions,
          validation: "basic",
        },
        city: { type: "text", validation: "text" },
        center: { type: "text", validation: "text" },
        fieldsOfStudy: { type: "textarea", validation: "text" },
      },
    },
  };
  return (
    <>
      <StepGenerator isInput={true} inputMap={inputs} />
    </>
  );
}
export default Step3;
