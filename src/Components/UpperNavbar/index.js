import React from "react";
import { UpperNavbarContainer, ButtonContainer } from "./styles";
import LanguageSelect from "Components/LanguageSelect";
import LoginButton from "Components/LoginButton";
import { Link } from "react-router-dom";

function UpperNavbar({ setLocale }) {
  return (
    <>
      <UpperNavbarContainer>
        <LanguageSelect setLocale={setLocale} />
        <ButtonContainer>
          <Link to="register">
            <LoginButton content="register" version={1} />
          </Link>
          <Link to='login'>
            <LoginButton content="login" version={2} />
          </Link>
        </ButtonContainer>
      </UpperNavbarContainer>
    </>
  );
}

export default UpperNavbar;
