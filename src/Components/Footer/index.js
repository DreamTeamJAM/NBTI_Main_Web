import React from "react";
import { FooterContainer, FooterMainContainer, FooterHelper } from "./styles";
import NBTILogo from "assets/images/nbti-nobg-white.png";
import FooterList from "./List/index";
import FooterSocialMediaList from "./socialMedia/index";
import { itemsAboutUs, itemsLegaAspects } from "./items/items";
import Sponsor from "./Sponsor/index";

function Footer() {
  return (
    <FooterContainer>
      <FooterHelper>
      <FooterMainContainer>
        <img src={NBTILogo} alt="NBTI Logo" />
        <div>
          <FooterList title="aboutUs" items={itemsAboutUs} />
        </div>
        <div>
          <FooterList title="legalAscpects" items={itemsLegaAspects} />
        </div>
        <div>
          <FooterSocialMediaList title="socialMedia" />
        </div>
      </FooterMainContainer>
      <Sponsor />

      </FooterHelper>
    </FooterContainer>
  );
}

export default Footer;
