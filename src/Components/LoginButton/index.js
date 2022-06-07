import React from "react";
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
