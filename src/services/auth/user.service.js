import React from "react";
import axios from "axios";
import authHeader from './user.service';

const BASE_HOST = "https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta";

class UserService {
    getPublicContent() {
        return axios.get(`${BASE_HOST}/all`);
    }

    getUserBoard() {
        return axios.get(`${BASE_HOST}/user`, { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(`${BASE_HOST}/mod`, { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(`${BASE_HOST}/admin`, { headers: authHeader() });
    }
}

export default new UserService();
