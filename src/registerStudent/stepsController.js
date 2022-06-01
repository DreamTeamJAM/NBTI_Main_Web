import React, {
    Component,
    useEffect,
    useState
} from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import Step0 from "./step0";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
} from 'redux/stepSlice';
import PdfButton from "Pages/Exit/pdf_button"
import {DefaultStepper,DefaultStep,DivDefault} from "registerStudent/styles"

export function GetSteps() {
    return ["Account Info", "Personal Info", "Work Experience", "Education & Training", "Language Skills", "Volunteering" ];
  }
  
export const StepController = () => {

    const steps = GetSteps();
    const activeStep = useSelector(selectCount)
    const dispatch = useDispatch();
    return (
        <DivDefault>
          <DefaultStepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <DefaultStep key={label}>
                <StepLabel>{label}</StepLabel>
              </DefaultStep>
            ))}
          </DefaultStepper>
          {activeStep === 0 ? (    
                <Step0/>
        ) : activeStep === 1 ? (
                <Step1/>
                ) : activeStep === 2 ? (
                <Step2/>
                ) : activeStep === 3 ? (
                <Step3/>
                ) : activeStep === 4 ? (
                <Step4/>
                ) : activeStep === 5 ? (
                <Step5/>
                ) : activeStep === 6 ? (
                 <PdfButton></PdfButton>
        ) : null}
          
        </DivDefault>
      );
}

export default StepController;