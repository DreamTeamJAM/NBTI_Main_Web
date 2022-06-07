import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth/auth.service";
import { getStudentByUserId } from "services/api/studentApi";
import { Container } from "./../../GlobalStyles";
import { downloadFile } from "services/api/fileApi";
import {DivSuperior, DivInferior} from "./pages/Components"
import {
  DivGrid,
  ContainerProfile,
  Div,
  Nav,
  DivDown,
  Button,
  ButtonNav,
} from "./style";
import { prettify } from "Templates/inputComponent";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";

export default function Profile() {
  
  const [currentUser, setCurrentUser] = useState("");
  const [StudentValues, setStudentValues] = useState({});
  const [img, setImg] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const cero = () => setActiveStep((prev) => (prev = 0));
  const uno = () => setActiveStep((prev) => (prev = 1));

  useEffect(() => {
    AuthService.getCurrentUser().then((user) => setCurrentUser(user));
   }, []);
  useEffect(() => {
    getStudentByUserId(currentUser.id).then((res) => {
      setStudentValues(res.data);
      downloadFile(res.data.photoId).then((file) => {
        setImg(file.data);
      });
    });
  },[currentUser] );
 pdfMake.vfs = pdfFonts.pdfMake.vfs;
    function make() {
     pdfMake.createPdf(docDefinition({ ...StudentValues, photo:"data:image/png;base64, "+img })).download();
  }
   
  return (
    <Container>
      <ContainerProfile>
        <h1>
          <strong>{prettify(currentUser.username)}</strong> Profile
        </h1>
        <DivGrid>
          <Div>
            <DivSuperior student={StudentValues} imagen={img}></DivSuperior>
          </Div>

          <div>
            <Nav>
              <ButtonNav onClick={cero}>Profile</ButtonNav>

              <ButtonNav onClick={uno}>Pdf</ButtonNav>
            </Nav>

            <DivDown>
              {activeStep === 0 ? (
                <>
                  <DivInferior student={StudentValues}></DivInferior>
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
