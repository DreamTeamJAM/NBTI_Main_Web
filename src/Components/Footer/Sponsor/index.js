import React from "react";
import { SponsorContainer, SponsorImg } from "./styles";
import logo_erasmusplus from "./img/logo_erasmus.png";
import logo_estudiar_en_españa from "./img/logo_estudiar_en_españa.png";
import logo_europass from "./img/logo_europass.png";
import logo_fondo_social_europeo from "./img/logo_fondo_social_europeo.png";

function Sponsor() {
  return (
    <SponsorContainer>
      <div>
        <SponsorImg src={logo_erasmusplus} alt="logo_erasmusplus" />
        <SponsorImg src={logo_estudiar_en_españa} alt="logo_estudiar_en_españa" />
        <SponsorImg src={logo_europass} alt="logo_europass" />
        <SponsorImg src={logo_fondo_social_europeo} alt="logo_fondo_social_europeo" />
      </div>
    </SponsorContainer>
  );
}

export default Sponsor;
