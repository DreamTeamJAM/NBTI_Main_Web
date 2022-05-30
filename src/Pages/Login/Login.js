import React, { useState } from "react";
import { Container } from "GlobalStyles";
import { loginTest, logIn } from "services/api/userApi";
function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const Enter = () => {
    console.log("Entra método login");
    logIn({ username: userName, password: passWord })
      .then((data) => {
        sessionStorage.setItem("currenUserId", data);
        sessionStorage.setItem("isLogin", true);
        console.log(`LoginCorre cto, userId: ${data}`);
      })
      .catch((err) => console.log(`Error: ${err}`));
    ///falta metodo para cuando te registras te aparezaca en el navbar log out
  };

  return (
    <Container>
      <form>
        <u>Welcome</u>
        <br />
        <br />
        <label>UserName:</label>
        <br />
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <br />
        <label>Password:</label>
        <br />
        <input
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        ></input>
        <br />
        <button type="button" onClick={Enter}>
          Submit
        </button>
        <br />

        <p>
          Don't have account? <a href="./register">Sign up</a>
        </p>
      </form>
    </Container>
  );
}

export default Login;
