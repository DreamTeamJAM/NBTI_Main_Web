import React from "react";

export default function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return {
      Authorization: "Bearer " + user.accessToken,
    };
  } else {
    return {};
  }
}
