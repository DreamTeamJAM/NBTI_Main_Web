import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { postHosting } from "services/api/hostingApi";
import { defaultFieldValidation, basicFieldValidation, numberFieldValidation } from "services/formValidation";
import { languages } from "Utils/languages";
import Exit from "../Exit/exit"

function Hosting() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const validate = (values) => {
    const errors = {};
    
    Array.from(["landlord","address","region","postalCode"]).forEach((s) => defaultFieldValidation(values,errors,s))
    Array.from(["email", "city"]).forEach((s) => basicFieldValidation(values,errors,s));
    Array.from(["telephone", "rentPerMonth","deposit"]).forEach((s) => numberFieldValidation(values,errors,s));
    
    return errors;
  };

  useEffect(() => {
    const options = languages.map((language) => ({
      value: language.name_en,
      label: language.name_en,
    }));
    setLanguagesObtined(options);
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

  const formik = useFormik({
    initialValues: {
      landlord: "",
      city: "",
      address: "",
      region: "",
      postalCode: "",
      telephone: "",
      email: "",
      rentPerMonth: "",
      deposit: "",
      foodIncluded: false,
    },
    validate,
    onSubmit: (values) => {
      console.log("values", values);
      postHosting(values);
    },
  });

  return (
    <div>
        {activeStep < 1 ? (
          <div>
          <Container>
      <form onSubmit={formik.handleSubmit}>
        <label>{translate("landLord")}: </label>
        <input type="text" {...formik.getFieldProps("landlord")} />
        {formik.touched.landlord && formik.errors.landlord ? (
          <p>{formik.errors.landlord}</p>
        ) : null}
        <br />
        <select
          name="slector"
          onChange={(event) => formik.setFieldValue("city", event.target.value)}
        >
          <option value="" label="Select a city" />
          {languagesObtined.map((language, index) => (
            <option key={index} value={language.value} label={language.value} />
          ))}
        </select>
        <br />
        <label>{translate("address")}: </label>
        <input type="text" {...formik.getFieldProps("address")} />
        {formik.touched.address && formik.errors.address ? (
          <p>{formik.errors.address}</p>
        ) : null}
        <br />
        <label>{translate("region")}: </label>
        <input type="text" {...formik.getFieldProps("region")} />
        {formik.touched.region && formik.errors.region ? (
          <p>{formik.errors.region}</p>
        ) : null}

        <br />
        <label>{translate("postalCode")}: </label>
        <input type="text" {...formik.getFieldProps("postalCode")} />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <p>{formik.errors.postalCode}</p>
        ) : null}
        <br />

        <label>{translate("telephoneNumber")}: </label>
        <input type="text" {...formik.getFieldProps("telephone")} />
        {formik.touched.telephone && formik.errors.telephone ? (
          <p>{formik.errors.telephone}</p>
        ) : null}
        <br />

        <label>{translate("email")}: </label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <br />

        <label>{translate("rentPerMonth")}: </label>
        <input type="text" {...formik.getFieldProps("rentPerMonth")} />
        {formik.touched.rentPerMonth && formik.errors.rentPerMonth ? (
          <p>{formik.errors.rentPerMonth}</p>
        ) : null}
        <br />

        <label>{translate("deposit")}: </label>
        <input type="text" {...formik.getFieldProps("deposit")} />
        {formik.touched.deposit && formik.errors.deposit ? (
          <p>{formik.errors.deposit}</p>
        ) : null}
        <br />
        <label>{translate("foodIncluded")}:</label>
        <input {...formik.getFieldProps("foodIncluded")} type="checkbox" />
          <br></br>
        <button type="submit" onClick={handleNext}>{translate("submit")}</button>
      </form>
    </Container>
          </div>
        ) : (
            <div>
            
          <Exit></Exit>
          
          </div>
        )}
      </div>
  );
}

export default Hosting;
