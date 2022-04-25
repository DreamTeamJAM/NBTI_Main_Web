import translate from 'i18n/translate';
import React from 'react'
import { NavItems } from 'Utils/navItems'
import { UpperNavbarContainer, UpperNavbarItems } from './styles'

function UpperNavbar() {
  return (
    <>
        <UpperNavbarContainer>
            {
              NavItems.map((item) => {
                return (
                  <UpperNavbarItems key={item.id} to={item.url}>
                    {translate(item.title)}
                  </UpperNavbarItems>
                );
              })
            }
        </UpperNavbarContainer>
    </>
  )
}

export default UpperNavbar