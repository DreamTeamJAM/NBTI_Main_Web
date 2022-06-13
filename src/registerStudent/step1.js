import React from "react";
import StepGenerator from "registerStudent/stepGenerator";
import { H1 } from "registerStudent/styles";
import { inputsStep1 } from "Templates/InputModel";

function Step1() {
  return (
    <>
      <H1>Personal Info</H1>
      <StepGenerator isInput={false} inputMap={inputsStep1} />
    </>
  );
}
export default Step1;
