import StepGenerator from "registerStudent/stepGenerator";
import {inputsStep4} from "Templates/InputModel"

export function Step4() {
  return (
    <>
      <h1>Language Skills</h1>
      <StepGenerator isInput={true} inputMap={inputsStep4} />
    </>
  );
}
export default Step4;
