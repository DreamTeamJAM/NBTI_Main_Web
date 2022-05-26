import React from 'react'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { docDefinition } from "Templates/Pass_content";
import { selectStudent } from "redux/studentSlice";
import { useSelector} from "react-redux";

function PdfButton() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const student = useSelector(selectStudent);
  function make()
  {
    pdfMake.createPdf(docDefinition({ ...student })).open();
  }
  return (
    <>
    <div>
    
    <div>
      <h2>Gracias por contactar con nostros! </h2>
      <p>En breve nos pondremos en contacto a traves del correo suministrado</p>
    </div>
   
  </div>
  <button onClick={()=> {make()}}>Descargar pdf</button>
  <br/>
  <button>Moverse al perfil</button>
  
  </>
  )
}

export default PdfButton;
