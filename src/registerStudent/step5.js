import StepGenerator from "registerStudent/stepGenerator";
import { languages } from "Utils/languages";

export function Step5(props) {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));

  const inputs = {
    volunteering: {
      type: "array",
      validation: "array",
      children: {
        title: { type: "text" , validation: "text"},
        startDate: { type: "date" ,
                validation: "basic"  },
        endDate: { type: "date",
                validation: "basic" },
        country: {
          type: "option",
          options: nationalityOptions,
          validation: "basic",
        },
        Description: { type: "textarea",  validation: "text" },
      },
    },
  };
  return (
    <>
      <StepGenerator isInput={true} inputMap={inputs} loading={props.loading} />
    </>
  );
}
export default Step5;
