import StepGenerator from "registerStudent/stepGenerator";
import {inputsStep2} from "Templates/InputModel"

export function Step2() {
  return (
    <>
    
      <StepGenerator isInput={true} inputMap={inputsStep2} />
      
    </>
  );
}
export default Step2;
