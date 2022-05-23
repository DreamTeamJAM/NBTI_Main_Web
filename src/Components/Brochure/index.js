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

function Brochure() {
  return (
    <BrochureContainer>
      <div data-aos="fade-up">
        <BrochureSectionTitle>
          NEED SOME INFO TO TAKE AWAY?
        </BrochureSectionTitle>
      </div>
      <BrochureContent>
        <div data-aos="fade-right">
          <LeftContent>
            <p>
              We've put some of the information found here in a handy printable
              PDF brochure for you, in case you'd like to refer to it again, or
              even better, share it with your friends or colleagues.
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
