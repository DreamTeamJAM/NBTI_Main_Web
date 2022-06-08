import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth/auth.service";
import { IMG, DivUp, DivD, DivM, DivW, H2, U, Header } from "./../style";
import { getStudentById } from "services/api/studentApi";
import { downloadFile } from "services/api/fileApi";
import { prettify } from "Templates/inputComponent";

export function DivSuperior(props) {
  
  
  const img= props.imagen;
  const student=props.student;

  return (
    <>
      <div></div>
      <DivUp>
        <IMG src={`data:image/jpeg;base64, ${img}`}></IMG>
      </DivUp>
      <DivUp>
        <p>
          <U>Name: </U>
          <strong>
            {prettify(student.name)}{" "}
            {prettify(student.firstSurname)}{" "}
            {prettify(student.secondSurname)}
          </strong>
        </p>
        <p>
          <U>Address:</U> {student.address}
        </p>
        <p>
          <U>Phone Number:</U> {student.phone}
        </p>
        <p>
          <U>Gender:</U> {student.gender}
        </p>
      </DivUp>
      <div></div>
      <DivUp>
        <p>
          <U>Date of birth:</U> {student.birthDate}
        </p>
        <p>
          <U>Email address:</U> {student.email}
        </p>
        <p>
          <U>Nationality:</U> {student.nationality}
        </p>
        <p>
          <U>Mother Tongue:</U> {student.motherTongues}
        </p>
      </DivUp>
      <div></div>
    </>
  );
}

export function DivInferior(props) {
 
  const [currentUser, setCurrentUser] = useState("");
  const [WorkArray,setWorkArray]=useState([]);
  const [EducationArray, setEducationArray] = useState([]);
  const [otherLanguagesArray, setotherLanguagesArray] = useState([]);
  const [volunteeringArray, setvolunteeringArray] = useState([]);



  useEffect(() => { 
    AuthService.getCurrentUser().then((user) => setCurrentUser(user));
   // console.log("Student: ", getStudentById(21));
    
      
      if(Object.keys(props.student).length !== 0){
        setWorkArray(
        props.student.workExperience.map((value, index) => {
          return (
            <>
              <U>Title:</U> <strong>{value.title}</strong>
              <br />
              <p>
                <U>Start Date:</U> {value.startDate}
              </p>
              <p>
                <U>End Date:</U> {value.endDate}
              </p>
              <p>
                <U>Country:</U> {value.country}
              </p>
              <p>
                <U>City:</U> {value.city}
              </p>
              <p>
                <U>Company:</U> {value.company}
              </p>
              <U>Tasks: </U>
              <p>{value.tasks}</p>
            </>
          );
        })
        )

      setEducationArray(
        props.student.education.map((value, index) => {
          return (
            <>
              <U>Title:</U> <strong>{value.title}</strong>
              <br />
              <p>
                <U>Start Date:</U> {value.startDate}
              </p>
              <p>
                <U>End Date:</U> {value.endDate}
              </p>
              <p>
                <U>Country:</U> {value.country}
              </p>
              <p>
                <U>City:</U> {value.city}
              </p>
              <p>
                <U>Center:</U> {value.center}
              </p>
              <U>Fields Of Study:</U>
              <p>{value.fieldsOfStudy}</p>
            </>
          );
        })
      );

      setotherLanguagesArray(
        props.student.otherLanguages.map((value, index) => {
          return (
            <>
              <U>Language Name:</U> <strong>{value.languageName}</strong>
              <br />
              <p>
                <U>Listening:</U> {value.listening}
              </p>
              <p>
                <U>Reading:</U> {value.reading}
              </p>
              <p>
                <U>Writing:</U> {value.writing}
              </p>
              <p>
                <U>Spoken Production:</U> {value.spokenProduction}
              </p>
              <p>
                <U>Spoken Interaction:</U> {value.spokenInteraction}
              </p>
            </>
          );
        })
      );

      setvolunteeringArray(
        props.student.volunteering.map((value, index) => {
          return (
            <>
              <U>Title:</U> <strong>{value.title}</strong>
              <br />
              <p>
                <U>Start Date:</U> {value.startDate}
              </p>
              <p>
                <U>End Date:</U> {value.endDate}
              </p>
              <p>
                <U>Country:</U> {value.country}
              </p>
              <U>Tasks:</U>
              <p>{value.description}</p>
            </>
          );
        })
      );
    }
  }, [props.student]);

  return (
    <>
      <DivD>
        <H2>Work Experience:</H2>
        <Header>{WorkArray}</Header>
        <H2>Volunteering:</H2>
        <Header>{volunteeringArray}</Header>
      </DivD>
      <DivW></DivW>
      <DivD>
        <DivM>
          <H2>About Me:</H2>
          <Header>{props.student.aboutMe}</Header>
        </DivM>
        <DivM>
          <H2>Digital Skills:</H2>
          <Header>{props.student.digitalSkills}</Header>
        </DivM>
        <DivM>
          <H2>Comunication Skills:</H2>
          <Header>{props.student.comunicationSkills}</Header>
        </DivM>
        <DivM>
          <H2>Hobbies:</H2>
          <Header>{props.student.hobbies}</Header>
        </DivM>
      </DivD>
      <DivW></DivW>
      <DivD>
        <H2>Education:</H2>
        <Header>{EducationArray}</Header>
        <H2>Other Languages:</H2>
        <Header>{otherLanguagesArray}</Header>
      </DivD>
    </>
  );
}
