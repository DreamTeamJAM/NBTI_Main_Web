export const docDefinition = (st) => {
  const workArray = st.workExperience.map((value, index) => {
    return {
      style: ["font"],
      alignment: "justify",
      margin: [0, 5, 0, 0],
      text: [
        {
          text: `${value.title}.
     `,
          bold: true,
          italics: false,
          fontSize: 15,
        },

        `${value.company} [${value.startDate}]  [${value.endDate}]
      
        `,
        { text: "City: ", italics: false, fontSize: 14 },
        ` ${value.city}
      `,
        { text: "Country: ", italics: false, fontSize: 14 },
        ` ${value.country}
      `,
        { text: "Description of the position: ", italics: false, fontSize: 14 },
        `${value.tasks}
        `,
      ],
    };
  });
  const educationArray = st.education.map((value, index) => {
    return {
      style: ["font"],
      alignment: "justify",
      margin: [0, 5, 0, 0],
      text: [
        {
          text: `${value.title}.
     `,
          bold: true,
          italics: false,
          fontSize: 15,
        },

        `${value.center} [${value.startDate}]  [${value.endDate}]
      
        `,
        { text: "City: ", italics: false, fontSize: 14 },
        ` ${value.city}
      `,
        { text: "Country: ", italics: false, fontSize: 14 },
        ` ${value.country}
      `,
        { text: "Description: ", italics: false, fontSize: 14 },
        ` ${value.fieldsOfStudy}
        `,
      ],
    };
  });

  const languageArray = st.otherLanguages.map((value, index) => {
    return {
      style: ["font"],
      margin: [0, 5, 0, 0],
      text: [
        { text: "Other language(s):", bold: true,italics: false, fontSize: 13 },

        ` ${value.languageName}
      `,

        { text: "LISTENING:", italics: false, fontSize: 13 },
        ` ${value.listening} 
      
      `,
        { text: "READING:", italics: false, fontSize: 13 },
        ` ${value.reading}
      
      `,
        { text: "WRITING:", italics: false, fontSize: 13 },
        ` ${value.writing}
      
      `,
        { text: "SPOKEN PRODUCTION:", italics: false, fontSize: 13 },
        ` ${value.spokenProduction}
      
      `,
        { text: "SPOKEN INTERACTION:", italics: false, fontSize: 13 },
        `  ${value.spokenInteraction}
      `,
      ],
    };
  });
  const volunteeringArray = st.volunteering.map((value, index) => {
    return {
      style: ["font"],
      alignment: "justify",
      margin: [0, 5, 0, 0],
      text: [
        {
          text: `${value.title}.
     `,
          bold: true,
          italics: false,
          fontSize: 15,
        },
        `[${value.startDate}] [${value.endDate}]
         
          `,
        { text: "Place:", italics: false, fontSize: 13 },
        ` ${value.country}
         
          `,
        { text: "Description:", italics: false, fontSize: 13 },
        ` ${value.Description}
          `,
          
      ],
    };
  });
  let nameVolunArray={ text:[

        ]}
  
    if(st.volunteering.length>0){
      nameVolunArray={
      style: ["subheader"],
      text: [
        {
         
         
        },
      ],
    };
  }
    let drivingLi={ text:[

    ]}

if(st.drivingLicense!=""){
  drivingLi={
    margin: [0, 5, 0, 0],
  text: [
    {
      style: ["font"],
      text: [
        { text: "Driving Licence: ", italics: false, fontSize: 14 },
        ` ${st.drivingLicense}
          `,
          
      ],
    },
  ],
};

};
let drivingLi2={ text:[

]}

if(st.drivingLicense!=""){
drivingLi2={

text: [
{
  text: "DRIVING LICENCE                                                                                                         ",
  style: "subheader",
},

],
};

};
  const nbti = {
    content: [
      {
        alignment: "justify",
        columns: [
          {
            image:`${st.photo}
            `,
              
            fit: [100, 100],
            margin: [0, 10, 0, 0],

            width: 120,
          },
          {
            style: "header",

            text: [
              {
                text: `${st.name} ${st.firstSurname} ${st.secondSurname}
            `,
                bold: true,
                italics: false,
                fontSize: 17,
              },
              {
                text: "Nationality: ",
                bold: true,
                italics: false,
                fontSize: 13,
              },
              ` ${st.nationality}
            `,
              { text: "Telephone:", bold: true, italics: false, fontSize: 13 },
              ` ${st.phone}
            `,
              {
                text: "Date of birth:",
                bold: true,
                italics: false,
                fontSize: 13,
              },
              ` ${st.birthDate}
            `,
              { text: "Gender:", bold: true, italics: false, fontSize: 13 },
              ` ${st.gender}
            `,
              {
                text: "Email address:",
                bold: true,
                italics: false,
                fontSize: 13,
              },
              ` 
            ${st.email}
            `,
              { text: "Address: ", bold: true, italics: false, fontSize: 13 },
              `${st.address} 
            `,
            ],
          },
          {
            image:
              "data:image/png;base64,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",
            fit: [300, 100],
            margin: [-30, -60, 0, 0],

            width: 120,
          },
        ],
      },

      {
        text: "ABOUT ME                                                                                                                     ",
        style: "subheader",
      },
      {
        text: [ `${st.aboutMe}
          `,],
        style: ["font"],
        margin: [0, 5, 0, 0],
        alignment: 'justify',
      },
      {
        text: "EDUCATION AND TRAINING                                                                                      ",
        style: "subheader",
      },
      ...educationArray,
      {
        text: "WORK EXPERIENCE                                                                                                     ",
        style: "subheader",
      },

      ...workArray,

      {
        text: "LANGUAGE SKILLS                                                                                                      ",
        style: "subheader",
      },
      {
        style: ["font"],
        margin: [0, 5, 0, 0],
        text: [
          { text: "Mother tongue(s): ", bold: true,italics: false, fontSize: 13 },
          ` ${st.motherTongues}`,
        ],
      },

      ...languageArray,

      {
        text: "DIGITAL SKILLS                                                                                                            ",
        style: "subheader",
      },
      {
        alignment: 'justify',
        text: [ `${st.digitalSkills}
          `,
        ],
        style: ["font"],
        margin: [0, 5, 0, 0],
      },
      {
        text: "COMMUNICATION AND INTERPERSONAL SKILLS                                                ",
        style: "subheader",
      },
      {
        alignment: 'justify',
        margin: [0, 5, 0, 0],
        text: [
          `${st.comunicationSkills}
   `,
        ],
      },
      
      {
        text: "HOBBIES AND INTERESTS                                                                                          ",
        style: "subheader",
      },

      {
        alignment: 'justify',
        margin: [0, 5, 0, 0],
        text: [
          `${st.hobbies}
            `,
        ],
      },
      nameVolunArray,
      ...volunteeringArray,
      drivingLi2,
      drivingLi,
    ],
    styles: {
      header: {
        fontSize: 12,
        Courier: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
        decoration: "underline",
      },

      font: {
        fontSize: 12,
      },
    },
    defaultStyle: {
      columnGap: 20,
    },
  };

  return nbti;
};
