import React from "react";
import { LanguageSelect } from "./styles";
import { LOCALES } from "./../../i18n/locale";
import { languages } from './../../Utils/languages';

function LanguageSelectComponent({ setLocale }) {
  const [language, setLanguage] = React.useState("");

  const handleChangeLanguage = (event) => {
    setLocale(event.target.value === "es" ? LOCALES.SPANISH : LOCALES.ENGLISH);
    localStorage.setItem("language", event.target.value);
  };

  React.useEffect(() => {
    setLanguage(localStorage.getItem("language"));
  }, []);

  return (
    <>
      <div
        style={{
          borderLeft: "1px solid rgba(0,0,0,0.8)",
          height: "15px",
          marginLeft: "1em",
        }}
      ></div>
      <LanguageSelect name="language" onChange={handleChangeLanguage}>
        { language === LOCALES.SPANISH || languages === undefined ? (
          <>
            <option value={LOCALES.SPANISH} label="Español" selected></option>
            <option value={LOCALES.ENGLISH} label="English"></option>
          </>
        ) : (
          <>
            <option value={LOCALES.SPANISH} label="Español"></option>
            <option value={LOCALES.ENGLISH} label="English" selected></option>
          </>
        )}
      </LanguageSelect>
    </>
  );
}

export default LanguageSelectComponent;
