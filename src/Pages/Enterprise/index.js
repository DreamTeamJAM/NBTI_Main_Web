import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { languages } from "Utils/languages";
import { postCompany } from "services/api/companyApi";
import {
  defaultFieldValidation,
  basicFieldValidation,
  numberFieldValidation,
} from "services/formValidation";
import Exit from "../Exit/exit";
import {
  InputForm,
  LabelForm,
  FormEnterprise,
  SelectEnterprise,
  FormButton,
} from "./../../GlobalStyles";
import {
  EnterpriseContainer,
  FormTitleDiv,
  ContainerEnterprise,
} from "./styles";

function Enterprise() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);
  const validate = (values) => {
    const errors = {};

    Array.from(["companyName", "address", "contactPerson", "region"]).forEach(
      (s) => defaultFieldValidation(values, errors, s)
    );
    Array.from(["city", "email"]).forEach((s) =>
      basicFieldValidation(values, errors, s)
    );
    numberFieldValidation(values, errors, "telephoneNumber");

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
      region: "",
    },
    validate,
    onSubmit: (values) => {
      postCompany(values);
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Container>
      <EnterpriseContainer>
        <FormTitleDiv>
          <h1>Are you a company that wants to work with us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eos quia doloremque, quae, quisquam dolorum quisquam. lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam eos quia
            doloremque, quae, quisquam dolorum quisquam.
          </p>
        </FormTitleDiv>
        {activeStep < 1 ? (
          <ContainerEnterprise>
            <h1>ENTERPRISE</h1>
            <FormEnterprise onSubmit={formik.handleSubmit}>
              <div>
                <LabelForm>{translate("Company Name")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Company Name..."
                  type="text"
                  {...formik.getFieldProps("companyName")}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <p>{formik.errors.companyName}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("Select a City")} </LabelForm>
                <br />
                <SelectEnterprise
                  name="slector"
                  onChange={(event) =>
                    formik.setFieldValue("city", event.target.value)
                  }
                >
                  <option value="" label="Select a city" />
                  {languagesObtined.map((language, index) => (
                    <option
                      key={index}
                      value={language.value}
                      label={language.value}
                    />
                  ))}
                </SelectEnterprise>
              </div>

              <div>
                <LabelForm>{translate("Address")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Address..."
                  type="text"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <p>{formik.errors.address}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("Region")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Region..."
                  type="text"
                  {...formik.getFieldProps("region")}
                />
                {formik.touched.region && formik.errors.region ? (
                  <p>{formik.errors.region}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("Contact Person")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Contact Person..."
                  type="text"
                  {...formik.getFieldProps("contactPerson")}
                />
                {formik.touched.contactPerson && formik.errors.contactPerson ? (
                  <p>{formik.errors.contactPerson}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("Telephone Number")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Telephone Number..."
                  type="text"
                  {...formik.getFieldProps("telephoneNumber")}
                />
                {formik.touched.telephoneNumber &&
                formik.errors.telephoneNumber ? (
                  <p>{formik.errors.telephoneNumber}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("email")} </LabelForm>
                <br />
                <InputForm
                  placeholder="Email..."
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>

              <div>
                <label></label>
                <br />
                <FormButton type="submit" onClick={handleNext}>
                  {translate("submit")}
                </FormButton>
              </div>
            </FormEnterprise>
          </ContainerEnterprise>
        ) : (
          <div>
            <Exit></Exit>
          </div>
        )}
      </EnterpriseContainer>
    </Container>
  );
}

export default Enterprise;
