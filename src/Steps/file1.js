import React, { useState, useEffect } from 'react'
import { GetSteps } from './step';
import { useDispatch } from "react-redux";
import { Initial } from "redux/Slice";
import { useFormik } from "formik";
import { PhonePrefixTags } from "Components/tags";
import { drivingLicense } from "Utils/drivingLicenses";
import File2 from "./file2"
import { languages } from "Utils/languages";
import { Container } from "GlobalStyles";

function File1() {
    const [activeStep, setActiveStep] = React.useState(0);
  const [autoPopulateData, setAutoPopulateData] = React.useState([]);
  const steps = GetSteps();
  const [name, setName] = useState("");
  const [firstSurname, setfirstSurname] = useState("");
  const [secondSurname, setsecondSurname] = useState("");
  const [nationality, setnationality] = useState("");
  const [phonePrefix, setphonePrefix] = useState("");
  const [phone, setphone] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [aboutMe, setaboutMe] = useState("");
  const [drivinglicense, setdrivinglicense] = useState("");
  const [hobbies, sethobbies] = useState("");
  

  const dispatch = useDispatch();
  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);

const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(
      Initial({
        name: name,
        firstSurname: firstSurname,
        secondSurname: secondSurname,
        nationality: nationality,
        phonePrefix: phonePrefix,
        phone: phone,
        birthDate: birthDate,
        gender: gender,
        email: email,
        address: address,
        aboutMe: aboutMe,
        drivinglicense: drivinglicense,
        hobbies: hobbies,
        
      })
    );
  };
const formik = useFormik({
    initialValues: {
      name: "",
      firstSurname: "",
      secondSurname: "",
      nationality: "",
      phonePrefix: "",
      phone: "",
      birthDate: "",
      gender: "",
      email: "",
      address: "",
      aboutMe: "",
      drivingLicense: "",
      hobbies: "",

      num: "8",
      calle: "La Habana",
      cod_postal: "41701",
      ciudad: "Sevilla",
      pais: "España",
      training: [
        {
          title: "",
          startDate: "",
          endDate: "",
          countrys: "",
          citys: "",
          center: "",
          fieldsOfStudy: "",
        },
      ],
      work: [
        {
          titleWork: "",
          startDateWork: "",
          endDateWork: "",
          countryWork: "",
          cityWork: "",
          companyWork: "",
          tasksWork: "",
        },
      ],
      motherTongues: [
        {
          tongue: "",
        },
      ],
      otherLanguages: [
        {
          language: "",
          listening: "",
          reading: "",
          writting: "",
          produc: "",
          interac: "",
        },
      ],
      digitalSkills: "",
      comunicationSkills: "",
      volunteering: [
        {
          enterpriseVolun: "",
          placeVolun: "",
          startDateVolun: "",
          endDateVolun: "",
          descriptionVolun: "",
        },
      ],
    },

    //validate,
    onSubmit: (values) => {
      console.log("values", values);
      /* fetch("http://192.168.1.74:8080/nbtiCV", values.text, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }).then((res) => console.log(res.json())); */
    },
  });
  return (
    
    <form onSubmit={formik.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            {...formik.getFieldProps("name")}
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <br />
          <label>First Surname:</label>
          <input
            type="text"
            {...formik.getFieldProps("firstSurname")}
            value={firstSurname}
            onChange={(e) => {setfirstSurname(e.target.value)}}
          />
          {formik.touched.firstSurname && formik.errors.firstSurname ? (
            <p>{formik.errors.firstSurname}</p>
          ) : null}
          <br />
          <label>Second Surname:</label>
          <input
            type="text"
            {...formik.getFieldProps("secondSurname")}
            value={secondSurname}
            onChange={(e) => {setsecondSurname(e.target.value)}}
          />
          {formik.touched.secondSurname && formik.errors.secondSurname ? (
            <p>{formik.errors.secondSurname}</p>
          ) : null}
          <br />
          <select
            name="slector"
            value={nationality}
            onChange={(event) =>
              formik.setFieldValue("nationality", event.target.value) &&
              setnationality(event.target.value)
            }
          >
            <option label="Select a country" />
            {languagesObtined.map((language, index) => (
              <option
                key={index}
                value={language.value}
                label={language.value}
              />
            ))}
          </select>
          <br />
          <label>Phone:</label>
          <PhonePrefixTags value={phonePrefix} />
          <input
            type="text"
            {...formik.getFieldProps("phone")}
            value={phone}
            onChange={(e) => {setphone(e.target.value)}}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p>{formik.errors.phone}</p>
          ) : null}
          <br />
          <label>Birth Date:</label>
          <input
            type="date"
            max="2022-01-01"
            value={birthDate}
            onChange={(event) =>{
              formik.setFieldValue("birthDate", event.target.value)
              setbirthDate(event.target.value)}
            }
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <p>{formik.errors.birthDate}</p>
          ) : null}
          <br />
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(event) =>{
                formik.setFieldValue("gender", event.target.value)
                setgender(event.target.value)}
              }
            />
            <label for="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(event) =>{
                formik.setFieldValue("gender", event.target.value)
                setgender(event.target.value)}
              }
            />
            <label for="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={(event) =>{
                formik.setFieldValue("gender", event.target.value)
                setgender(event.target.value)}
              }
            />
            <label for="other">Other</label>
          </div>
          {formik.touched.gender && formik.errors.gender ? (
            <p>{formik.errors.gender}</p>
          ) : null}
          <br />
          <label>Email:</label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <br />
          <label>Address:</label>
          <input
            type="text"
            {...formik.getFieldProps("address")}
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          {formik.touched.address && formik.errors.address ? (
            <p>{formik.errors.address}</p>
          ) : null}
          <br />
          <label>About Me:</label>
          <br />
          <textarea
            type="text"
            {...formik.getFieldProps("aboutMe")}
            value={aboutMe}
            onChange={(e) => {setaboutMe(e.target.value)}}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe ? (
            <p>{formik.errors.aboutMe}</p>
          ) : null}
          <br />
          <select
            name="drivingLicense"
            value={drivinglicense}
            onChange={(event) =>{
              formik.setFieldValue("drivingLicense", event.target.value)
              setdrivinglicense(event.target.value)}
            }
          >
            <option label="Select a driving licence" />
            {drivingLicense.map((licence, index) => (
              <option key={index} value={licence} label={licence} />
            ))}
          </select>
          <br />
          <label>Hobbies:</label>
          <br />
          <textarea
            type="text"
            {...formik.getFieldProps("hobbies")}
            value={hobbies}
            onChange={(e) => {sethobbies(e.target.value)}}
          />
          {formik.touched.hobbies && formik.errors.hobbies ? (
            <p>{formik.errors.hobbies}</p>
          ) : null}
          <br />
          <br />
          <button type="submit" onClick={handleNext}>
            Save
          </button>
        </form>
        
          ) 
}

export default File1;