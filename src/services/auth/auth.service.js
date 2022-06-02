import React from "react";
import axios from "axios";

const BASE_HOST = "https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta";

class AuthService {
  async login(username, password) {
    return await axios.post(`http://localhost:8080/api/auth/signin`, {
      username,
      password,
    }).then((res) => console.log(`res: ${res.status}`));
    
  }

  async logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password, roles = ["user"]) {
    return axios.post("http://localhost:8080/api/auth/signup", {
      username,
      email,
      password,
      roles
    });
  }

  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
