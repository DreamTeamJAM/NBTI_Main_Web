import { Button, ButtonDiv, LanguageIcon, Nav, NavTitleImg } from "./styles";
import { NavItems } from "../../Utils/navItems";
import { LOCALES } from "i18n";
import translate from "../../i18n/translate";
import SpanishFlag from "assets/images/SpanishFlag.png";
import UkFlag from "assets/images/UkFlag.png";
import NbtiLogo from "assets/images/logo_horizontal.jpg";
import { HiOutlineMenu } from "react-icons/hi";

/** Navbar Component */
export default function Navbar({ setLocale }) {
  const handleChangeLanguage = (event) => {
    console.log(event.target.value);
    setLocale(event.target.value === "es" ? LOCALES.SPANISH : LOCALES.ENGLISH);
    sessionStorage.setItem("language", event.target.value);
  };

  return (
    <>
      <Nav>
        <ButtonDiv>
          <select name="language" onChange={handleChangeLanguage}>
            {sessionStorage.getItem("language") === LOCALES.SPANISH ? (
              <>
                <option value={LOCALES.SPANISH} label="ES" selected></option>
                <option value={LOCALES.ENGLISH} label="EN"></option>
              </>
            ) : (
              <>
                <option value={LOCALES.SPANISH} label="ES"></option>
                <option value={LOCALES.ENGLISH} label="EN" selected></option>
              </>
            )}
          </select>
        </ButtonDiv>
        <NavTitleImg src={NbtiLogo} alt="NBTI Logo" />
        <HiOutlineMenu size={30} />
      </Nav>
    </>
  );
}
