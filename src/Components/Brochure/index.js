import { React } from "react";
import {
  BrochureContainer,
  BrochureSectionTitle,
  BrochureContent,
} from "./styles";
import BrochureImg from "assets/images/Brochure.png";

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
          <p>
            We've put some of the information found here in a handy printable
            PDF brochure for you, in case you'd like to refer to it again, or
            even better, share it with your friends or colleagues.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={BrochureImg} alt="brochure" />
        </div>
      </BrochureContent>
    </BrochureContainer>
  );
}

export default Brochure;
