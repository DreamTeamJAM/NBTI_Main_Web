import StepGenerator from "registerStudent/stepGenerator";
import {inputsStep3} from "Templates/InputModel"

export function Step3() {
    return (
    <>
      <StepGenerator isInput={true} inputMap={inputsStep3} />
    </>
  );
}
export default Step3;
