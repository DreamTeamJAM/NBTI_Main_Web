import React from "react";
import { FooterTitle, Ul, Li, Instagram, Facebook } from "./styles";
import translate from "i18n/translate";

function FooterSocialMediaList({ title }) {
  return (
    <div>
      <Ul>
        <FooterTitle> {translate(title)} </FooterTitle>
        <div>
          <Li>
            <a
              href="https://www.instagram.com/nbti.eu/?hl=es"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
          </Li>
          <Li>
            <a
              href="https://www.facebook.com/www.nbti.ie/"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
          </Li>
        </div>
      </Ul>
    </div>
  );
}

export default FooterSocialMediaList;
