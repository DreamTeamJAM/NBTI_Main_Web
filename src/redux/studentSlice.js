import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    id: "",
    photo: "",
    name: "",
    dni: "",
    city: "",
    project: "",
    firstSurname: "",
    secondSurname: "",
    nationality: "",
    phone: "",
    birthDate: "",
    gender: "",
    email: "",
    dniFront: "",
    dniBack: "",
    address: "",
    aboutMe: "",
    workExperience: [
      {
        title: "",
        startDate: "",
        endDate: "",
        country: "",
        city: "",
        company: "",
        tasks: "",
      },
    ],
    education: [
      {
        title: "",
      startDate: "",
      endDate: "",
      country:"",
      city: "",
      center: "",
      fieldsOfStudy: "",}
    ],
    motherTongues: "",
    otherLanguages: [{
      languageName:"",
      listening: "",
      reading: "",
      writing: "",
      spokenProduction: "",
      spokenInteraction: "",
    },],
    digitalSkills: "",
    comunicationSkills: "",
    drivingLicense: "",
    hobbies: "",
    volunteering: [{
      title: "",
      startDate: "",
      endDate: "",
      country: "",
      description: "",
    },],
  },
  reducers: {
    updateStudent: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateStudent } = studentSlice.actions;
export const selectStudent = (state) => state.student;
export default studentSlice.reducer;
