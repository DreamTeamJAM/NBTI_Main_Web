import styled from "styled-components";

export const Card = styled.div`
  width: 220px;
  height: 300px;
  text-align: center;
  border-radius: 0px;
  background-color: #fff;
  padding: 1.9rem 2rem;
  backdrop-filter: blur(8.5px);
  transition: all 0.5s ease-in-out;
  -webkit-backdrop-filter: blur(8.5px);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 2rem;
    font-size: 1.5em;
    font-weight: 500;
    color: #000;
  }

  button {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    padding: 0.8em 1.4em;
    letter-spacing: 3px;
    background-color: #000;
    color: #fff;
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  a {
    color: #000;
    display: block;
    font-size: 0.75em;
    transition: color 0.3s ease-out;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const CardField = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background-color: #fff;
  padding: 0.5em 1em;
  border: 1px solid black;
  padding: 0.6em 1.1em;
  margin-bottom: 0.5em;

  svg {
    height: 1em;
    width: 1em;
    fill: #000;
  }

  input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #000;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
