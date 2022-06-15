import StepGenerator from "registerStudent/stepGenerator";
import {inputsStep5} from "Templates/InputModel"

export function Step5(props) {
  return (
    <>
      <StepGenerator isInput={true} inputMap={inputsStep5} loading={props.loading} />
    </>
  );
}
export default Step5;
