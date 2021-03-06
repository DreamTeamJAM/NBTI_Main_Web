import {
  Nav,
  ButtonContainer,
  LoginStyled,
  MenuDisplay,
  UserDiv,
} from "./styles";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useOnClickOutside } from "hooks/BurgerMenu.hooks";
import { Burger, Menu } from "Components/SideMenu";
import FocusLock from "react-focus-lock";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import HorizontalMenu from "./Menu/index";
import LoginButton from "Components/LoginButton";
import AuthService from "../../services/auth/auth.service";
import eventBus from "../../common/EventBus";
import AuthVerify from "./../../common/auth-verify";
import ButtonWithDropDownCmp from "./ProfileIcon/buttonDropDownCmp";
import LanguageSelect from "Components/LanguageSelect";
import translate from "i18n/translate";
import NbtiLogo from "assets/images/nbti-nobg.png";
import { NavTitleImg } from "./Menu/styles";

/** Navbar Component */
export default function Navbar({ setLocale }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [colorChange, setColorChange] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLogin, setIsLogin] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    AuthService.getCurrentUser().then((res) => {
      if (res) {
        setCurrentUser(res);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  eventBus.on("logout", () => {
    handleLogout();
  });

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setIsLogin(false);
  };

  useOnClickOutside(node, () => setOpen(false));
  window.addEventListener("scroll", changeNavbarColor);

  const handleChangeButtons = () => {
    if (!isLogin) {
      return (
        <ButtonContainer>
          <LoginStyled to={`/login`}>{translate("login")}</LoginStyled>
          <LoginButton
            to={`/register`}
            bgcolor="#181eb3"
            color="white"
            txcolor="white"
            hoverbgcolor="#131898"
            hovercolor="white"
          >
            {translate("register")}
          </LoginButton>
          <LanguageSelect setLocale={setLocale} />
          <AuthVerify logOut={handleLogout} />
        </ButtonContainer>
      );
    } else if (isLogin) {
      return (
        <ButtonContainer>
          <ButtonWithDropDownCmp onClick={() => eventBus.dispatch("logout")} />
          <LanguageSelect setLocale={setLocale} />
        </ButtonContainer>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav
        navColorChange={colorChange === false ? "none" : "#F3F3F3"}
        isOnScroll={colorChange}
      >
        <MenuDisplay ref={node}>
          <div>
          <NavTitleImg src={NbtiLogo} alt="NBTI Logo" />
          <LanguageSelect setLocale={setLocale} />
          </div>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu
              setLocale={setLocale}
              open={open}
              setOpen={setOpen}
              id={menuId}
            />
          </FocusLock>
        </MenuDisplay>

        <HorizontalMenu />
        <UserDiv>{handleChangeButtons()}</UserDiv>
      </Nav>
    </ThemeProvider>
  );
}
