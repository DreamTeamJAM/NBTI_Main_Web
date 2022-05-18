import styled from "styled-components";

/** Global Styles */
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8em;
  margin-bottom: 5em;
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  border: 1px solid #995309;
  border-radius: 4px;
  background-color: rgb(24, 30, 177, 0.5);
  cursor: pointer;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 100;

  box-shadow: 0 1px 0 rgb(255, 255, 255, 0) inset, 0 1px 3px rgba(0, 0, 0, 0.2);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, #5257dc),
    to(#181eb2)
  );
  background-image: linear-gradient(#5257dc 10%, #181eb2 100%);

  &:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(10%, #5257dc),
      to(#181eb2)
    );
    background-image: linear-gradient(#5257dc 40%, #181eb2 100%);
    background-color: #181eb2;
    color: #fff;
  }
`;
