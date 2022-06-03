import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { postHosting } from "services/api/hostingApi";
import {
  defaultFieldValidation,
  basicFieldValidation,
  numberFieldValidation,
} from "services/formValidation";
import { languages } from "Utils/languages";
import Exit from "../Exit/exit";
import {
  InputForm,
  LabelForm,
  SelectEnterprise,
  FormButton,
} from "./../../GlobalStyles";
import {
  HostingContainer,
  FormTitleDiv,
  ContainerHosting,
  FormHosting,
  InputRadio
} from "./styles";
function Hosting() {
  const [languagesObtined, setLanguagesObtined] = React.useState([]);

  const validate = (values) => {
    const errors = {};

    Array.from(["landlord", "address", "region", "postalCode"]).forEach((s) =>
      defaultFieldValidation(values, errors, s)
    );
    Array.from(["email", "city"]).forEach((s) =>
      basicFieldValidation(values, errors, s)
    );
    Array.from(["telephone", "rentPerMonth", "deposit"]).forEach((s) =>
      numberFieldValidation(values, errors, s)
    );

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
    <Container>
      <HostingContainer>
        {activeStep < 1 ? (
          <ContainerHosting>
            <h1>HOSTING</h1>
            <FormHosting onSubmit={formik.handleSubmit}>
              <div>
                <LabelForm>{translate("landLord")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("landlord")} />
                {formik.touched.landlord && formik.errors.landlord ? (
                  <p>{formik.errors.landlord}</p>
                ) : null}
              </div>

              <div>
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
                <br />
              </div>

              <div>
                <LabelForm>{translate("address")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("address")} />
                {formik.touched.address && formik.errors.address ? (
                  <p>{formik.errors.address}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("region")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("region")} />
                {formik.touched.region && formik.errors.region ? (
                  <p>{formik.errors.region}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("postalCode")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("postalCode")} />
                {formik.touched.postalCode && formik.errors.postalCode ? (
                  <p>{formik.errors.postalCode}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("telephoneNumber")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("telephone")} />
                {formik.touched.telephone && formik.errors.telephone ? (
                  <p>{formik.errors.telephone}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("email")}: </LabelForm>
                <br />
                <InputForm type="email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("rentPerMonth")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("rentPerMonth")} />
                {formik.touched.rentPerMonth && formik.errors.rentPerMonth ? (
                  <p>{formik.errors.rentPerMonth}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("deposit")}: </LabelForm>
                <br />
                <InputForm type="text" {...formik.getFieldProps("deposit")} />
                {formik.touched.deposit && formik.errors.deposit ? (
                  <p>{formik.errors.deposit}</p>
                ) : null}
              </div>

              <div>
                <LabelForm>{translate("foodIncluded")}:</LabelForm>
                
                <InputRadio
                  {...formik.getFieldProps("foodIncluded")}
                  type="checkbox"
                />
                <FormButton type="submit" onClick={handleNext}>
                  {translate("submit")}
                </FormButton>
              </div>
            </FormHosting>
          </ContainerHosting>
        ) : (
          <div>
            <Exit></Exit>
          </div>
        )}
        <FormTitleDiv>
          <h1>Are you a company that wants to work with us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eos quia doloremque, quae, quisquam dolorum quisquam. lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam eos quia
            doloremque, quae, quisquam dolorum quisquam.
          </p>
        </FormTitleDiv>
      </HostingContainer>
    </Container>
  );
}

export default Hosting;
