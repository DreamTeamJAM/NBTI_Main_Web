import React from "react";
import { Container } from "GlobalStyles";
// import Steps from "./../../Steps/step"
import StepController from "registerStudent/stepsController"

function CvPage() {
  return (
    <div>
      <Container>
        <StepController></StepController>
      </Container>
    </div>
  );
}

export default CvPage;
