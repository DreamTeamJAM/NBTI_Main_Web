import { ButtonDiv, LanguageSelect, Nav, NavTitleImg } from "./styles";
import { LOCALES } from "i18n";
import NbtiLogo from "assets/images/logo_horizontal.jpg";
import { HiOutlineMenu } from "react-icons/hi";
import { Button } from "GlobalStyles";
import translate from "i18n/translate";

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
          <LanguageSelect name="language" onChange={handleChangeLanguage}>
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
          </LanguageSelect>
        </ButtonDiv>
        <NavTitleImg src={NbtiLogo} alt="NBTI Logo" />
        <Button>
          {translate('access')}
        </Button>
      </Nav>
    </>
  );
}
