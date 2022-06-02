import React from 'react'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import { selectStudent } from "redux/studentSlice";
import { useSelector} from "react-redux";
import { StyledLink,Button,DivPdf,Div } from "./style";
import { Container } from "GlobalStyles";

function PdfButton() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const student = useSelector(selectStudent);
  function make()
  {
    pdfMake.createPdf(docDefinition({ ...student })).download();
  }
  return (
    <>
   <Div>
    
    <div>
      <h2>Gracias por contactar con nostros! </h2>
      <p>En breve nos pondremos en contacto a traves del correo suministrado</p>
    </div>
   
    <DivPdf>
  
  <Button onClick={()=> {make()}}>Descargar Pdf</Button>
  <br/>
  <StyledLink to={"/profile"}>Moverse al perfil</StyledLink>
  </DivPdf>
  </Div>
  </>
  )
}

export default PdfButton;
