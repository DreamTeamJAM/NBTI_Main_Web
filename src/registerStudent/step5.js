import StepGenerator from "registerStudent/stepGenerator";
import { languages } from "Utils/languages";

export function Step5() {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));

  const inputs = {
    volunteering: {
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
        Description: { type: "text" },
      },
    },
  };
  return (
    <>
      <StepGenerator inputMap={inputs} />
    </>
  );
}
export default Step5;
