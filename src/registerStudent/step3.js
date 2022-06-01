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
      children: {
        title: { type: "text" },
        startDate: { type: "date" },
        endDate: { type: "date" },
        country: {
          type: "option",
          options: nationalityOptions,
          validation: "basic",
        },
        city: { type: "text" },
        center: { type: "text" },
        fieldsOfStudy: { type: "textarea" },
      },
    },
  };
  return (
    <>
      <StepGenerator isInput={false} inputMap={inputs} />
    </>
  );
}
export default Step3;
