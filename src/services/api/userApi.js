import axios from "axios";

const BASE_HOST = "https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta";

export const getAllUsers = async (user) => {
  const response = await axios.get(`${BASE_HOST}/users`, {
    auth: {
      username: user.username,
      password: user.password,
    },
  });
  return response.data;
};

export const getUserById = async (user) => {
  const response = await axios.get(`${BASE_HOST}/users/${user.id}`, {
    auth: {
      username: user.username,
      password: user.password,
    },
  });
  return response.data;
};

export const logIn = async (user) => {
  return await axios.get(`${BASE_HOST}/logIn`, {
    auth: {
      username: user.username,
      password: user.password,
    },
  }).then(res => res.data);
};

export const signUp = async (body) => {
  const response = await axios.post(`${BASE_HOST}/signUp`, body);
  return response.data;
};

export const putUser = async (user, body) => {
  const response = await axios.put(`${BASE_HOST}/users`, body, {
    auth: {
      username: user.username,
      password: user.password,
    },
  });
  return response.data;
};
