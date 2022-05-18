import React from "react";
import translate from "i18n/translate";
import { StyledLogLink } from "./styles";

function LoginButton({ children, to, ...props }) {
  return (
    <>
      <StyledLogLink
        to={to}
        {...props}
      >
        {children}
      </StyledLogLink>
    </>
  );
}

export default LoginButton;
