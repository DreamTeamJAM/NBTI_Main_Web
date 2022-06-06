import React, { useEffect } from "react";
import "./styles.css";
import { Container } from "./../../GlobalStyles";
import { useNavigate } from "react-router-dom";

export default function Spinner() {
  const navigate = useNavigate();

  useEffect(() => {
    // wait 3s
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <Container style={{ height: "80vh" }}>
      <div class="loading">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
    </Container>
  );
}


