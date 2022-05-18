import React from "react";
import { LanguageSelect } from "./styles";
import { LOCALES } from "i18n";

function LanguageSelectComponent({setLocale}) {
  const handleChangeLanguage = (event) => {
    console.log(event.target.value);
    setLocale(event.target.value === "es" ? LOCALES.SPANISH : LOCALES.ENGLISH);
    sessionStorage.setItem("language", event.target.value);
  };

  return (
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
  );
}

export default LanguageSelectComponent;
