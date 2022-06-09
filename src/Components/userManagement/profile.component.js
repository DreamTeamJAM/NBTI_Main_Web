import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "context/ProviderContxt";
import AuthService from "../../services/auth/auth.service";
import { getStudentByUserId } from "services/api/studentApi";
import { Container } from "./../../GlobalStyles";
import { downloadFile } from "services/api/fileApi";
import { DivSuperior, DivInferior } from "./pages/Components";
import {
  DivGrid,
  ContainerProfile,
  Div,
  Nav,
  DivDown,
  Button,
  ButtonNav,
  DivSpin,
} from "./style";
import Spinner2 from "Components/Spinnerv2/index";
import { prettify } from "Templates/inputComponent";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";

export default function Profile() {
  const [activeStep, setActiveStep] = useState(0);
  const cero = () => setActiveStep((prev) => (prev = 0));
  const uno = () => setActiveStep((prev) => (prev = 1));
  const student = useContext(StudentContext);

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  function make() {
    pdfMake
      .createPdf(
        docDefinition({
          ...student.data,
          photo: "data:image/png;base64, " + student.data.photo,
        })
      )
      .download();
  }

  return student.loading ? (
    <Container>
      <DivSpin>
        {" "}
        <Spinner2 />{" "}
      </DivSpin>
    </Container>
  ) : (
    <Container>
      <ContainerProfile>
        <h1>Profile</h1>
        <DivGrid>
          <Div>
            <DivSuperior
              student={student.data}
              imagen={student.data.photo}
            ></DivSuperior>
          </Div>

          <div>
            <Nav>
              <ButtonNav onClick={cero}>Profile</ButtonNav>

              <ButtonNav onClick={uno}>Pdf</ButtonNav>
            </Nav>

            <DivDown>
              {activeStep === 0 ? (
                <>
                  <DivInferior student={student.data}></DivInferior>
                </>
              ) : activeStep === 1 ? (
                <>
                  <div></div>
                  <div>
                    <Button
                      onClick={() => {
                        make();
                      }}
                    >
                      Descargar Pdf
                    </Button>
                  </div>
                  <div></div>
                </>
              ) : null}
            </DivDown>
          </div>
        </DivGrid>
      </ContainerProfile>
    </Container>
  );
}
