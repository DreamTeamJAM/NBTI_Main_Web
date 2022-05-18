import { useFormik } from "formik";
import { Container } from "GlobalStyles";
import translate from "i18n/translate";
import React, { useEffect } from "react";
import { drivingLicense } from "Utils/drivingLicenses";
import { languages } from "Utils/languages";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import Steps from "./../../Steps/step";

export default function CvForm() {
  return (
    <>
      <Container>
        <Steps></Steps>
      </Container>
    </>
  );
}
