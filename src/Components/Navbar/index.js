import { Nav, ButtonContainer } from "./styles";
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
import ProfileIcon from "./ProfileIcon/index";
import ButtonWithDropDownCmp from "./ProfileIcon/buttonDropDownCmp";

/** Navbar Component */
export default function Navbar({ setLocale }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [colorChange, setColorChange] = useState(false);

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      user.then((user) => {
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      });
    }
  }, []);

  eventBus.on("logout", () => {
    handleLogout();
  });

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  useOnClickOutside(node, () => setOpen(false));
  window.addEventListener("scroll", changeNavbarColor);

  const handleChangeButtons = () => {
    if (currentUser === undefined) {
      console.log("No user");
      return (
        <ButtonContainer>
          <LoginButton
            to={`/login`}
            bgcolor="#F3F3F3"
            color="#181eb3"
            txcolor="white"
            hoverbgcolor="#181eb3"
            hovercolor="#F3F3F3"
          >
            Login
          </LoginButton>
          <LoginButton
            to={`/register`}
            bgcolor="#181eb3"
            color="white"
            txcolor="white"
            hoverbgcolor="#F3F3F3"
            hovercolor="#181eb3"
            onClick={() => eventBus.dispatch("logout")}
          >
            Register
          </LoginButton>
          <AuthVerify logOut={handleLogout} />
        </ButtonContainer>
      );
    } else {
      console.log("User");
      return (
        <ButtonContainer>
          <ButtonWithDropDownCmp />
          <LoginButton
            to={`/`}
            bgcolor="#181eb3"
            color="white"
            txcolor="white"
            hoverbgcolor="#F3F3F3"
            hovercolor="#181eb3"
            onClick={() => eventBus.dispatch("logout")}
          >
            Logout
          </LoginButton>
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
        {/* <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div> */}
        <HorizontalMenu setLocale={setLocale} />
        {handleChangeButtons()}
      </Nav>
    </ThemeProvider>
  );
}
