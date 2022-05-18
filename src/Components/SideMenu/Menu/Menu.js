import React from "react";
import { bool } from "prop-types";
import { StyledMenu, StyledLink, StyledButton } from "./Menu.styled";
import { NavItems } from "Utils/navItems";
import translate from "i18n/translate";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        {NavItems.map((item) => {
          return (
            <StyledLink
              key={item.id}
              to={item.link}
              tabIndex={tabIndex}
              onClick={() => setOpen(!open)}
              {...props}
            >
              <StyledButton>{translate(item.text)}</StyledButton>
            </StyledLink>
          );
        })}
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
