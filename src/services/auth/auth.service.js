import React from "react";
import axios from "axios";

const BASE_HOST = "https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta";

class AuthService {
  async login(username, password) {
    return await axios
      .post(`${BASE_HOST}/auth/signin`, {
        username,
        password,
      })
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)));
  }

  async logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password, roles = ["user"]) {
    return axios.post(`${BASE_HOST}/auth/signup`, {
      username,
      email,
      password,
      roles,
    });
  }

  async getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(`user2: ${user}`);
    if (user !== null) {
      return user;
    }
    return null;
  }
}

export default new AuthService();
