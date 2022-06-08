import React from "react";
import StepGenerator from "registerStudent/stepGenerator";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import {
  AccountDiv,
  FormStep,
  FormButton,
  AccountDivEdited,
  H1
} from "registerStudent/styles";

function Step1() {
  const nationalityOptions = languages.map((language) => ({
    value: language.name_en,
    label: language.name_en,
  }));
  const drivingOptions = drivingLicense.map((drive) => ({
    value: drive,
    label: drive,
  }));

  const inputs = {
    name: { type: "text", validation: "text" },
    photo: { type: "image", validation: "basic" },
    dni: { type: "text", validation: "text" },
    dniFront: { type: "image", validation: "basic" },
    city: { type: "text", validation: "text" },
    dniBack: { type: "image", validation: "basic" },
    firstSurname: { type: "text", validation: "text" },
    secondSurname: { type: "text", validation: "text" },
    nationality: {
      type: "option",
      options: nationalityOptions,
      validation: "basic",
    },
    phone: { type: "phone", validation: "number" },
    birthDate: { type: "date", validation: "basic" },
    gender: {
      type: "radio",
      options: ["Male", "Female", "Other"],
      validation: "basic",
    },
    email: { type: "email", validation: "email" },
    address: { type: "text", validation: "text" },
    aboutMe: { type: "textarea", validation: "text" },
    digitalSkills: { type: "textarea", validation: "text" },
    comunicationSkills: { type: "textarea", validation: "text" },
    drivingLicense: {
      type: "option",
      options: drivingOptions,
      validation: "basic",
    },
    hobbies: { type: "textarea", validation: "text" },
  };
  return (
    <>
      <H1>Personal Info</H1>
      <StepGenerator isInput={false} inputMap={inputs} />
    </>
  );
}
export default Step1;
