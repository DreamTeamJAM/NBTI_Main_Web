import React from "react";
import { FooterTitle, Ul, FooterItem, Li } from "./styles";
import translate from "i18n/translate";

function FooterList({ title, items }) {

  return (
    <div>
      <Ul>
        <FooterTitle> {translate(title)} </FooterTitle>
        {items.map((item, index) => (
          <Li key={index}>
            <FooterItem to={item}>
              {translate(item)}
            </FooterItem>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default FooterList;
