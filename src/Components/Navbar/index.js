import { Nav, ButtonContainer } from "./styles";
import { useRef } from "react";
import { useState } from "react";
import { useOnClickOutside } from "hooks/BurgerMenu.hooks";
import { Burger, Menu } from "Components/SideMenu";
import FocusLock from "react-focus-lock";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import HorizontalMenu from "./Menu/index";
import LoginButton from "Components/LoginButton";
import { LanguageSelect } from './../LanguageSelect/styles';

/** Navbar Component */
export default function Navbar({ setLocale }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useOnClickOutside(node, () => setOpen(false));
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <ThemeProvider theme={theme}>
      <Nav
        navColorChange={colorChange === false ? "none" : "rgb(184,222,240, 1)"}
        isOnScroll={colorChange}
      >
        {/* <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div> */}
        <HorizontalMenu setLocale={setLocale} />
        
        <ButtonContainer>
          <LoginButton
            to={`/login`}
            bgcolor="#b8def0"
            color="#181eb3"
            txcolor="white"
            hoverbgcolor="#181eb3"
            hovercolor="#b8def0"
          >
            Login
          </LoginButton>
          <LoginButton
            to={`/register`}
            bgcolor="#181eb3"
            color="white"
            txcolor="white"
            hoverbgcolor="#b8def0"
            hovercolor="#181eb3"
          >
            Register
          </LoginButton>
        </ButtonContainer>
      </Nav>
    </ThemeProvider>
  );
}
