import React  from 'react';
import { ButtonContainer } from './../../UpperNavbar/styles';
import LoginButton from './../../LoginButton/index';

export default function Login() {
    return (
        <ButtonContainer>
            <LoginButton
              to={`/`}
              bgcolor="#b8def0"
              color="#181eb3"
              txcolor="white"
              hoverbgcolor="#181eb3"
              hovercolor="#b8def0"
            >
              IconoUsuario
            </LoginButton>
            <LoginButton
              to={`/`}
              bgcolor="#181eb3"
              color="white"
              txcolor="white"
              hoverbgcolor="#b8def0"
              hovercolor="#181eb3"
              onClick={() => {
                sessionStorage.removeItem('currentUserId');
              }}
            >
              Logout
            </LoginButton>
          </ButtonContainer>
    );
}


