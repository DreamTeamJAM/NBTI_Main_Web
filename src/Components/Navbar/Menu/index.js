import NbtiLogo from "assets/images/nbti-nobg.png";
import { NavTitleImg, Item, ItemContainer, MenuContainer } from "./styles";
import { NavItems } from "Utils/navItems";
import translate from "i18n/translate";

function HorizontalMenu() {
  return (
    <MenuContainer>
      <NavTitleImg src={NbtiLogo} alt="NBTI Logo" />
      <ItemContainer>
        {NavItems.map((item) => {
          return (
            <Item key={item.id} to={item.link}>
              {translate(item.text)}
            </Item>
          );
        })}
      </ItemContainer>
    </MenuContainer>
  );
}

export default HorizontalMenu;
