import React from "react";
import { FooterTitle, Ul, FooterItem, Li } from "./styles";
import translate from "i18n/translate";

function FooterList({ title, items }) {
  console.log("title", title);
  console.log("items", items);

  return (
    <div>
      <Ul>
        <FooterTitle> {translate(title)} </FooterTitle>
        {items.map((item, index) => (
          <Li>
            <FooterItem key={index} to={item}>
              {translate(item)}
            </FooterItem>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default FooterList;
