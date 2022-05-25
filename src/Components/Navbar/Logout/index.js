import React  from 'react';
import { ButtonContainer } from './../../UpperNavbar/styles';
import LoginButton from './../../LoginButton/index';

export default function Logout() {
    return (
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
    );
}


