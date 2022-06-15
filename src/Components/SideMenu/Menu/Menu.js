import React from "react";
import { bool } from "prop-types";
import {
  StyledMenu,
  StyledLink,
  StyledButton,
  StyledButtonContainer,
} from "./Menu.styled";
import { NavItems } from "Utils/navItems";
import translate from "i18n/translate";
import AuthVerify from "./../../../common/auth-verify";
import eventBus from "./../../../common/EventBus";
import AuthService from "services/auth/auth.service";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const [isLogin, setIsLogin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(undefined);

  eventBus.on("logout", () => {
    handleLogout();
  });

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setIsLogin(false);
  };

  React.useEffect(() => {
    AuthService.getCurrentUser().then((res) => {
      if (res) {
        setCurrentUser(res);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const handleChangeButtons = () => {
    if (!isLogin) {
      return (
        <StyledButtonContainer>
          <StyledLink
            to={"/login"}
            onClick={() => {
              setOpen(!open);
            }}
            tabIndex={tabIndex}
          >
            {translate("login")}
          </StyledLink>
          <StyledLink
            onClick={() => {
              setOpen(!open);
            }}
            to={`/register`}
            tabIndex={tabIndex}
          >
            {translate("register")}
          </StyledLink>
          <AuthVerify logOut={handleLogout} />
        </StyledButtonContainer>
      );
    } else if (isLogin) {
      return (
        <StyledButtonContainer>
          <StyledLink
            to={"/profile"}
            onClick={() => {
              setOpen(!open);
            }}
            tabIndex={tabIndex}
          >
            {translate("profile")}
          </StyledLink>
          <StyledLink
            onClick={() => {
              setOpen(!open);
              eventBus.dispatch("logout");
            }}
            to={`/`}
            tabIndex={tabIndex}
          >
            {translate("logout")}
          </StyledLink>
          <AuthVerify logOut={handleLogout} />
        </StyledButtonContainer>
      );
    }
  };

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        
        {handleChangeButtons()}

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
