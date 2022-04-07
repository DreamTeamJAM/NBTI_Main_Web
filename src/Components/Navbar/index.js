import { Button, ButtonDiv, LanguageIcon, Nav, NavTitle, StyledLink, Ul } from "./styles";
import { NavItems } from "../../Utils/navItems";
import { LOCALES } from "i18n";
import translate from "../../i18n/translate";
import SpanishFlag from "assets/images/SpanishFlag.png";
import UkFlag from "assets/images/UkFlag.png";

/** Navbar Component */
export default function Navbar({ setLocale }) {
  return (
    <>
      <Nav>
        <ButtonDiv>
          <Button onClick={() => setLocale(LOCALES.SPANISH)}>
            <LanguageIcon src={SpanishFlag} alt='Spanish Flag'/>
          </Button>
          <br />
          <Button onClick={() => setLocale(LOCALES.ENGLISH)}>
            <LanguageIcon src={UkFlag} alt='Spanish Flag'/>
          </Button>
        </ButtonDiv>
        <NavTitle>NBTI</NavTitle>
        <Ul>
          {NavItems.map((item) => {
            return (
              <StyledLink key={item.id} to={item.url}>
                {translate(item.title)}
              </StyledLink>
            );
          })}
        </Ul>
      </Nav>
    </>
  );
}
