import React from "react";
import { LanguageSelect } from "./styles";
import { LOCALES } from "i18n";

function LanguageSelectComponent({ setLocale }) {
  const handleChangeLanguage = (event) => {
    console.log(event.target.value);
    setLocale(event.target.value === "es" ? LOCALES.SPANISH : LOCALES.ENGLISH);
    sessionStorage.setItem("language", event.target.value);
  };

  return (
    <>
      <div style={{ borderLeft: "1px solid rgba(0,0,0,0.8)", height: "15px", marginLeft: '1em' }}></div>
      <LanguageSelect name="language" onChange={handleChangeLanguage}>
        {sessionStorage.getItem("language") === LOCALES.SPANISH ? (
          <>
            <option value={LOCALES.SPANISH} label="Español" selected></option>
            <option value={LOCALES.ENGLISH} label="English"></option>
          </>
        ) : (
          <>
            <option value={LOCALES.SPANISH} label="English"></option>
            <option value={LOCALES.ENGLISH} label="Español" selected></option>
          </>
        )}
      </LanguageSelect>
    </>
  );
}

export default LanguageSelectComponent;
