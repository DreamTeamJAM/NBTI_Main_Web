import styled from "styled-components";

export const Card = styled.div`
  width: 190px;
  padding: 1.9rem 1.2rem;
  text-align: center;
  background: rgba(24, 30, 179, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border-radius: 16px;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: #f5f5f5;
  }

  button {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color: #ffeba7;
    color: #5e6681;
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5e6681;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  a {
    color: #f5f5f5;
    display: block;
    font-size: 0.75em;
    transition: color 0.3s ease-out;
  }

  a:hover {
    color: #ffeba7;
  }
`;

export const CardField = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background-color: #1f2029;
  border-radius: 4px;
  padding: 0.5em 1em;

  svg {
    height: 1em;
    width: 1em;
    fill: #ffeba7;
  }

  input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
