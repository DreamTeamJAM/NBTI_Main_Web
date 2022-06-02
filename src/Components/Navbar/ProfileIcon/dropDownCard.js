import React from "react";
import { DropDownCardStyled, StyledLink } from "./styles";

export const DropDownCard = ({ data = [], setOpen }) => {
  console.log(data);
  return (
    <DropDownCardStyled>
      <ul>
        {data.map((item, i) => (
          <>
            <li>
              <StyledLink to={item.link} key={i} onClick={() => {
                setOpen(false);
                item.onClick();
              }}>
                {item.icon}
                <span>{item.title}</span>
              </StyledLink>
            </li>
            <hr></hr>
          </>
        ))}
      </ul>
    </DropDownCardStyled>
  );
};
