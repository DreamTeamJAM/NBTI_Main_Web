import axios from "axios";
import authHeader from '../auth/auth-header';

const BASE_HOST = "https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta";

export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_HOST}/users`, {
    headers: authHeader()
  });
  return response.data;
};

export const getUserById = async (user) => {
  const response = await axios.get(`${BASE_HOST}/users/${user.id}`, {
    headers: authHeader()
  });
  return response.data;
};

export const putUser = async (body) => {
  const response = await axios.put(`${BASE_HOST}/users`, body, {
    headers: authHeader()
  });
  return response.data;
};