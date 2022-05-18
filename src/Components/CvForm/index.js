import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
function CvForm() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 5) {
      errors.name = "Nombre demasiado corto";
    }

    if (!values.lastname) {
      errors.lastname = "Requerido";
    } else if (values.lastname.length < 5) {
      errors.lastname = "Apellido demasiado corto";
    }

    if (!values.email) {
      errors.email = "Requerido";
    }

    return errors;
  };

  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      firstSurname: "",
      secondSurname: "",
      nationality: "",
      phone: "",
      birthDate: "",
      gender: "",
      email: "",
      address: "",
      aboutMe: "",
      workExperience: [],
      education: [],
      motherTonges: [],
      otherLanguages: [],
      digitalSkills: "",
      comunicationSkills: "",
      drivingLicense: "",
      hobbies: "",
      volunteering: [],

      num: "8",
      calle: "La Habana",
      cod_postal: "41701",
      ciudad: "Sevilla",
      pais: "España",

      trabajo1: "Apicultor",
      empresa: "Apinazar",
      day: "20",
      month: "05",
      year: "2016",
      day2: "10",
      month2: "09",
      year2: "2022",
      city: "Dos Hermanas",
      country: "España",
      tema: "Limpiador",
      tema2: "Movedor de cajas",
      tema3: "Raspador",

      Title: "Desarrollo de Aplicaciones Multiplataforma",
      startDate: "17/10/2001",
      EndDate: "17/10/2001",
      Country: "España",
      City: "Sevilla",
      Center: "Maria Auxiliadora salesianas de Nervion",
      FieldsofStudy: "Java, React, Android",

      idioma: "Español",
      idioma2: "Francés",
      lenguaje: "Inglés",
      listening: "B1",
      reading: "B1",
      writting: "B1",
      produc: "B1",
      interac: "B1",

      skills:
        "Microsoft Office, Microsoft Word, Microsoft Excel, Outlook, Facebook, Google / Graphics Design Adobe Photoshop Sketchup / Canva and GIMP / Social Media/Social Network",
      interskills: "Trabajador",
      interskills1: "Paciente",
      interskills2: "Responsable",
    },
    //validate,
    onSubmit: (values) => {
      console.log("values", values);
      pdfMake.createPdf(docDefinition({ ...values })).open();

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
    <Container style={{ marginTop: "2em" }}>
      <form onSubmit={formik.handleSubmit}>
        <label>{translate("name")}:</label>
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("firstSurname")}:</label>
        <input type="text" {...formik.getFieldProps("firstSurname")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("secondSurname")}:</label>
        <input type="text" {...formik.getFieldProps("secondSurname")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <select
          name="slector"
          onChange={(event) =>
            formik.setFieldValue("nationality", event.target.value)
          }
        >
          <option value="" label="Select a country" />
          {languagesObtined.map((language, index) => (
            <option key={index} value={language.value} label={language.value} />
          ))}
        </select>
        <br />

        <label>{translate("phone")}:</label>
        <input type="text" {...formik.getFieldProps("phone")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("birthDate")}:</label>
        <input
          type="date"
          max="2022-01-01"
          onChange={(event) =>
            formik.setFieldValue("birthDate", event.target.value)
          }
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("gender")}:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="male">{translate("male")}</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="female">{translate("female")}</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={(event) =>
              formik.setFieldValue("gender", event.target.value)
            }
          />
          <label for="other">{translate("other")}</label>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("email")}:</label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("address")}:</label>
        <input type="text" {...formik.getFieldProps("address")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("aboutMe")}:</label>
        <br />
        <textarea type="text" {...formik.getFieldProps("aboutMe")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <select
          name="drivingLicense"
          onChange={(event) =>
            formik.setFieldValue("drivingLicense", event.target.value)
          }
        >
          <option value="" label="Select a driving licence" />
          {drivingLicense.map((licence, index) => (
            <option key={index} value={licence} label={licence} />
          ))}
        </select>
        <br />

        <label>{translate("hobbies")}:</label>
        <br />
        <textarea type="text" {...formik.getFieldProps("hobbies")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Vocational Training")}:</label>
        <br />

        <label>{translate("Title")}:</label>
        <input type="text" {...formik.getFieldProps("title")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Start Date")}:</label>
        <input
          type="date"
          max="2022-01-01"
          onChange={(event) =>
            formik.setFieldValue("startDate", event.target.value)
          }
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("End Date")}:</label>
        <input
          type="date"
          max="2022-01-01"
          onChange={(event) =>
            formik.setFieldValue("EndDate", event.target.value)
          }
        />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />
        <select
          name="slector"
          onChange={(event) =>
            formik.setFieldValue("Country", event.target.value)
          }
        >
          <option value="" label="Select a Country" />
          {languagesObtined.map((language, index) => (
            <option key={index} value={language.value} label={language.value} />
          ))}
        </select>
        <br />

        <label>{translate("City")}:</label>
        <input type="text" {...formik.getFieldProps("City")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Center")}:</label>
        <input type="text" {...formik.getFieldProps("Center")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Fields of Study")}:</label>
        <br />
        <textarea type="text" {...formik.getFieldProps("FieldsofStudy")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />
        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default CvForm;
