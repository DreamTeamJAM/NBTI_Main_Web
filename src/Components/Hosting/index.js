import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { languages } from "Utils/languages";

function Hosting() {
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
      landlord: "",
      city: "",
      Address: "",
      region: "",
      postalCode: "",
      telephoneNumber: "",
      Email: "",
      rentPerMonth: "",
      deposit: "",
      foodIncluded: "",
    },
    //validate,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Container style={{ marginTop: "2em" }}>
      <form onSubmit={formik.handleSubmit}>
        <label>{translate("Land Lord")}: </label>
        <input type="text" {...formik.getFieldProps("landlord")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
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
        <input type="text" {...formik.getFieldProps("Address")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />
        <label>{translate("Region")}: </label>
        <input type="text" {...formik.getFieldProps("region")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}

        <br />
        <label>{translate("Postal Code")}: </label>
        <input type="text" {...formik.getFieldProps("postalCode")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Telephone Number")}: </label>
        <input type="text" {...formik.getFieldProps("telephoneNumber")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Email")}: </label>
        <input type="email" {...formik.getFieldProps("Email")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Rent Per Month")}: </label>
        <input type="text" {...formik.getFieldProps("rentPerMonth")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />

        <label>{translate("Deposit")}: </label>
        <input type="text" {...formik.getFieldProps("deposit")} />
        {formik.touched.name && formik.errors.name ? (
          <p>{formik.errors.name}</p>
        ) : null}
        <br />
        <label>{translate("Food Included")}:</label>
        <div>
          <input
            type="radio"
            id="true"
            name="foodIncluded"
            value="true"
            onChange={(event) =>
              formik.setFieldValue("foodIncluded", event.target.value)
            }
          />
          <label for="Yes">{translate("Yes")}</label>
        </div>
        <div>
          <input
            type="radio"
            id="false"
            name="foodIncluded"
            value="false"
            onChange={(event) =>
              formik.setFieldValue("foodIncluded", event.target.value)
            }
          />
          <label for="No">{translate("No")}</label>
        </div>
        <br/>
        <button type="submit">{translate("submit")}</button>
      </form>
    </Container>
  );
}

export default Hosting;