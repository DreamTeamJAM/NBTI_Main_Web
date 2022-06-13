import { React } from "react";
import {
  BrochureContainer,
  BrochureSectionTitle,
  BrochureContent,
  DownloadButtonContent,
  LeftContent
} from "./styles";
import BrochureImg from "assets/images/Brochure.png";
import DownloadButton from "./../DownloadButton/index";
import { Link } from "react-router-dom";
import translate from "i18n/translate";

function Brochure() {
  return (
    <BrochureContainer>
      <div data-aos="fade-up">
        <BrochureSectionTitle>
         {translate("infoTakeawayTitle")}
        </BrochureSectionTitle>
      </div>
      <BrochureContent>
        <div data-aos="fade-right">
          <LeftContent>
            <p>
             {translate("takeawayBlurb")}
            </p>
            <hr />
            <DownloadButtonContent>
            <Link to="./Brochure/NTBI-Brochure-English.pdf" target="_blank" download><DownloadButton>Download in English</DownloadButton></Link>
            <Link to="./Brochure/NBTI-Folleto-Espanol.pdf" target="_blank" download><DownloadButton>Descargar en Español</DownloadButton></Link>
            </DownloadButtonContent>
          </LeftContent>
        </div>
        <div data-aos="fade-left">
          <img src={BrochureImg} alt="brochure" />
        </div>
      </BrochureContent>
    </BrochureContainer>
  );
}

export default Brochure;
