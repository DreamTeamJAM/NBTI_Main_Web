export const docDefinition = ({
    name,
    email,
    firstSurname,
    secondSurname,
    nationality,
    phone,
    birthDate,
    gender,
    address,

    num,
    calle,
    cod_postal,
    ciudad,
    pais,

    aboutMe,
    titleWork,
    startDateWork,
    endDateWork,
    countryWork,
    cityWork,
    companyWork,
    tasksWork,
    title,
    startDate,
    endDate,
    countrys,
    citys,
    center,
    fieldsOfStudy,

    idioma,
    idioma2,
    lenguaje,
    listening,
    reading,
    writting,
    produc,
    interac,

    skills,
    interskills,
    interskills1,
    interskills2,
    
    drivingLicense,
    hobbies,
    volunteering,
  }) => {
    const nbti = {
      content: [
        {
          alignment: "justify",
          columns: [
            {
              image:
                'data:image/jpeg;base64,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',
              fit: [100, 100],
              margin: [0, 60, 0, 0],
              
              width: 120,
            },
            {
              style: "header",
           
          
          text:[
            `${name} ${firstSurname} ${secondSurname}
            `, 
            {text: 'Nationality: ', italics: false, fontSize: 14}, ` ${nationality}
            `,
            {text: 'Telephone:', italics: false, fontSize: 14}, ` ${phone}
            `,
            {text: 'Date of birth:', italics: false, fontSize: 14}, ` ${birthDate}
            `,
            {text: 'Gender:', italics: false, fontSize: 14}, ` ${gender}
            `,
            {text: 'Email address:', italics: false, fontSize: 14}, ` ${email}
            `,
            {text: 'Addres: ', italics: false, fontSize: 14}, `${address} ${num},${calle},${cod_postal} 
            ${ciudad}(${pais})
            `,
          ],
              
            },
            {
              image:'data:image/png;base64,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',
              fit: [300, 100],
              margin: [-60, -60, 0, 0],
  
              width: 120,
          },
          ],
        },
  
        {
          text: "ABOUT ME                                                                                                                     ",
          style: "subheader",
        },
        {
          text: `
          ${aboutMe}
          
          `,
          style: ["quote", "font"],
        },
        {
          text: "WORK EXPERIENCE                                                                                                     ",
        style: "subheader",
      },
        {
          style: ["quote", "font"],
          text:[
             `
             ${titleWork}.
          `,
          
  
          `${companyWork} [${startDateWork}]  [${endDateWork}]
          
          `,
          {text: 'City: ', italics: false, fontSize: 14}, ` ${cityWork}
          `,
          {text: 'Country: ', italics: false, fontSize: 14}, ` ${countryWork},
          `,

          ]
        },
        {
          ul: [
            `${tasksWork}
            
            `,
          ],
        },
        {
          text: "EDUCATION AND TRAINING                                                                                      ",
        style: "subheader",
      },
        {
          style: ["quote", "font"],
          text:[ `
          ${title}.
          `,
          `${center} [${startDate}] [${endDate}]
         
          `,
          {text: 'City:', italics: false, fontSize: 14}, ` ${citys},
          `,
          {text: 'Country:', italics: false, fontSize: 14}, ` ${countrys}
          `,
          {text: 'Field(s) of study:', italics: false, fontSize: 14}, ` 
          `,
           

        ]
          
        },
        {
          ul: [
            `${fieldsOfStudy}
            
            `,
          ],
          pageBreak: "after",
        },
        {
          text: "LANGUAGE SKILLS                                                                                                      ",
        style: "subheader",
        
      },
        {style: ["quote", "font"],
        text:[ 
          
          {text: 'Mother tongue(s):', italics: false, fontSize: 14}, ` ${idioma} | ${idioma2}.,
        `,
        {text: 'Other language(s):', italics: false, fontSize: 14}, 
        
        `${lenguaje}
        
        `,
        
        {text: 'LISTENING:', italics: false, fontSize: 14}, ` ${listening} 
        
        `,
        {text: 'READING:', italics: false, fontSize: 14}, ` ${reading}
        
        `,
        {text: 'WRITING:', italics: false, fontSize: 14}, ` ${writting}
        
        `,
        {text: 'SPOKEN PRODUCTION:', italics: false, fontSize: 14}, ` ${produc}
        
        `,
        {text: 'SPOKEN INTERACTION:', italics: false, fontSize: 14}, `  ${interac}
        
        `,
        
      ]
        },
        {
          text: "DIGITAL SKILLS                                                                                                            ",
        style: "subheader",
      },
        {
          text: `
          ${skills}
  
          `,
  
          style: ["quote", "font"],
        },
        {
          text: "COMMUNICATION AND INTERPERSONAL SKILLS                                                ",
        style: "subheader",
      },
        {
          ul: [
            `${interskills}
            `,
  
            `${interskills1}
            `,
  
            `${interskills2}
  
            
            `,
          ],
        },
        {
          text: "DRIVING LICENCE                                                                                                         ",
        style: "subheader",
      },
        
          {
            style: ["quote", "font"],
            text:[
             
              {text: 'Driving Licence: ', italics: false, fontSize: 14}, ` ${drivingLicense}
            `,
          ] 
        },
        {
          text: "HOBBIES AND INTERESTS                                                                                          ",
        style: "subheader",
      },
  
        {
          ul: [
            `${hobbies}
            
            
            `,
          ],
        },
        {
          text: "VOLUNTEERING                                                                                              ",
          style: "subheader",
        },
        {
          text: `${volunteering}
                 
          `,
  
          style: ["quote", "font"],
        },
      ],
      styles: {
        header: {
          fontSize: 13,
          bold:true,
          Courier: true,
        },
        subheader: {
          fontSize: 15,
          bold: true,
          decoration: "underline",
        },
        quote: {
          italics: true,
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
  