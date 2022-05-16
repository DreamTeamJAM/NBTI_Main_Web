import React, { Component } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import File1 from "Components/CvForm/file1";
import File2 from "Components/CvForm/file2";
import File3 from "Components/CvForm/file3";

function GetSteps() {
    return ["Step1", "Step2", "Step3"];
  }
  
  const Steps = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [autoPopulateData, setAutoPopulateData] = React.useState([]);
    const steps = GetSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
  
    const handleOnError = (err, file, inputElem, reason) => {
      console.log(err);
    };
  
    const handleOnRemoveFile = (data) => {
      console.log(data, "ON REMOVE");
    };
  
    const handleOnDrop = (data) => {
      console.log(data, "ON ADD");
      setAutoPopulateData(data);
      handleNext();
    };
  
    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep < 1 ? (
          <div>
            
            <File1
              onDrop={handleOnDrop}
              onError={handleOnError}
              noDrag
              addRemoveButton
              onRemoveFile={handleOnRemoveFile}
              style={{ border: 0 }}
            >
            </File1>
            <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
            Siguiente
            </Button>
            
          </div>
        ) : activeStep === 1 ? (
            <div>
            
          <File2
            handleNext={handleNext}
            autoPopulateData={autoPopulateData}
          ></File2>
          <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
             Siguiente
            </Button>
            <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              Volver
            </Button>
          </div>
        ) : (
            <div>
            
          <File3></File3>
          <Button
              style={{ marginBottom: 5 }}
              variant="contained"
              color="primary"
              onClick={handleBack}
            >
              Volver
            </Button>
          </div>
        )}
      </div>
    );
  };
  
  export default Steps;