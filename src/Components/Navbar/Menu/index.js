import NbtiLogo from "assets/images/nbti-nobg.png";
import { NavTitleImg, Item, ItemContainer, MenuContainer } from "./styles";
import { NavItems } from "Utils/navItems";
import translate from "i18n/translate";
import LanguageSelect from 'Components/LanguageSelect';

function HorizontalMenu({ setLocale }) {
  return (
    <MenuContainer>
      <NavTitleImg src={NbtiLogo} alt="NBTI Logo" />
      <ItemContainer>
        {NavItems.map((item) => {
          return <Item to={item.link}>{translate(item.text)}</Item>;
        })}
      </ItemContainer>
      <LanguageSelect setLocale={setLocale} />
    </MenuContainer>
  );
}

export default HorizontalMenu;
