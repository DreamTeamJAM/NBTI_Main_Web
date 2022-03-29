import { ButtonDiv, Nav, NavTitle, StyledLink, Ul } from "./styles";
import { NavItems } from "../../Utils/navItems";
import { LOCALES } from "i18n";

export default function Navbar({ setLocale }) {
  return (
    <>
      <Nav>
        <NavTitle>NBTI</NavTitle>
        <Ul>
          {NavItems.map((item) => {
            return (
              <StyledLink key={item.id} to={item.url}>
                {item.title}
              </StyledLink>
            );
          })}
        </Ul>
        <ButtonDiv>
          <button onClick={() => setLocale(LOCALES.SPANISH)}>Español</button>
          <br />
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
        </ButtonDiv>
      </Nav>
    </>
  );
}
