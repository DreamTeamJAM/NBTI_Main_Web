import styled from "styled-components";

export const LanguageSelect = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background: none;
  border: none;
  color: #000;
  font-size: inherit;
  margin-left: 0.5em;
  overflow: hidden;
  padding: 8px 3px 8px 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;

  option {
    color: #000;
    font-size: inherit;
    padding: 8px 3px 8px 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
