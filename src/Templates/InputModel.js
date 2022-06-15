import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import { levelLanguage } from "Utils/levelLanguage";
import { tongueLvl } from "Utils/Tongue";

const levelOptions = levelLanguage.map((level) => ({
    value: level,
    label: level,
  }));
  const langWhitelist = tongueLvl.map((element, index) => element.value);

const nationalityOptions = languages.map((language) => ({
  value: language.name_en,
  label: language.name_en,
}));
const drivingOptions = drivingLicense.map((drive) => ({
  value: drive,
  label: drive,
}));

export const inputsStep1 = {
  name: { type: "text", validation: "text" },
    dni: { type: "text", validation: "text" },
    city: { type: "text", validation: "text" },
    firstSurname: { type: "text", validation: "text" },
    secondSurname: { type: "text", validation: "text" },
    nationality: {
      type: "option",
      options: nationalityOptions,
      validation: "basic",
    },
    phone: { type: "phone", validation: "phone" },
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
    photo: { type: "image", validation: "basic" },
    dniFront: { type: "image", validation: "basic" },
    dniBack: { type: "image", validation: "basic" },
};

export const inputsStep2={
  workExperience:{
    type:"array",
    validation: "array",
    children:{
      "title": {type:"text",
        "validation":"text"},
    "startDate":{type:"date",validation : "basic"},
    "endDate":{type:"date",validation : "basic"},
    "country":{type: "option",
                      options : nationalityOptions,
                      validation : "basic"},
     "city": {type:"text",
             "validation":"text"},
     "company": {type:"text",
                validation:"text"},
     "tasks": {type:"textarea", validation: "text"}
    }
}
  };

 export const inputsStep3 = {
  education: {
    type: "array",
    validation: "array",
    min: 1,
    children: {
      title: { type: "text", validation: "text" },
      startDate: { type: "date", validation: "basic" },
      endDate: { type: "date", validation: "basic"  },
      country: {
        type: "option",
        options: nationalityOptions,
        validation: "basic",
      },
      city: { type: "text", validation: "text" },
      center: { type: "text", validation: "text" },
      fieldsOfStudy: { type: "textarea", validation: "text" },
    },
  },
  };

  export const inputsStep4 = {
    motherTongues: { type: "tags", whitelist: langWhitelist,  validation: "basic", },
    otherLanguages: {
      type: "array",
      validation: "array",
      children: {
        languageName: {
          type: "option",
          options: tongueLvl,
          validation: "basic",
        },
        listening: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
        reading: { type: "option", options: levelOptions, validation: "basic" },
        writing: { type: "option", options: levelOptions, validation: "basic" },
        spokenProduction: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
        spokenInteraction: {
          type: "option",
          options: levelOptions,
          validation: "basic",
        },
      },
    },
  };

  export const inputsStep5 = {
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