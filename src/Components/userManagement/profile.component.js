import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth/auth.service";
import { Container } from "./../../GlobalStyles";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser().then((user) => setCurrentUser(user));
  }, []);

  console.log(`currentUser: ${currentUser}`);
  return (
    <Container>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </Container>
  );
}
