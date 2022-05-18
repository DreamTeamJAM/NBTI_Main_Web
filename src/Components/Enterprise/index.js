import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { languages } from "Utils/languages";
import {postCompany} from "services/api/companyApi";
import { defaultFieldValidation, basicFieldValidation, numberFieldValidation } from "services/formValidation";

function Enterprise() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  const validate = (values) => {
    const errors = {};

    Array.from(["companyName","address","contactPerson","region"]).forEach((s) => defaultFieldValidation(values,errors,s));
    Array.from(["city", "email"]).forEach((s) => basicFieldValidation(values,errors,s));
    numberFieldValidation(values,errors,"telephoneNumber");

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
      companyName: "",
      address: "",
      city: "",
      contactPerson: "",
      telephoneNumber: "",
      email: "",
      region:"",
    },
    validate,
    onSubmit: (values) => {
      console.log("values", values);
      postCompany(values)
    },
  });

  return (
    <Container style={{ marginTop: "2em" }}>
      <form onSubmit={formik.handleSubmit}>
        <label>{translate("Company Name")}: </label>
        <input type="text" {...formik.getFieldProps("companyName")} />
        {formik.touched.companyName && formik.errors.companyName ? (
          <p>{formik.errors.companyName}</p>
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
        <label>{translate("Address")}: </label>
        <input type="text" {...formik.getFieldProps("address")} />
        {formik.touched.address && formik.errors.address ? (
          <p>{formik.errors.address}</p>
        ) : null}
        <br />
        <label>{translate("Region")}: </label>
        <input type="text" {...formik.getFieldProps("region")} />
        {formik.touched.region && formik.errors.region ? (
          <p>{formik.errors.region}</p>
        ) : null}
        
        <br />
        <label>{translate("Contact Person")}: </label>
        <input type="text" {...formik.getFieldProps("contactPerson")} />
        {formik.touched.contactPerson && formik.errors.contactPerson ? (
          <p>{formik.errors.contactPerson}</p>
        ) : null}
        <br />

        <label>{translate("Telephone Number")}: </label>
        <input type="text" {...formik.getFieldProps("telephoneNumber")} />
        {formik.touched.telephoneNumber && formik.errors.telephoneNumber ? (
          <p>{formik.errors.telephoneNumber}</p>
        ) : null}
        <br />

        <label>{translate("email")}: </label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        <br />

        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default Enterprise;
