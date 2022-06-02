import axios from "axios";
import authHeader from '../auth/auth-header';

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta/hosting'


export const getAllHostings = async () => {

    const response = await axios.get(`${BASE_HOST}`, {
        headers: authHeader()
    });
    return response.data
}

export const getHostingById = async (id) => {

    const response = await axios.get(`${BASE_HOST}/${id}`, {
        headers: authHeader()
    });
    return response.data
}

export const postHosting = async (body) => {

    const response = await axios.post(`${BASE_HOST}`, body);
    return response.data
}

export const putHosting = async (body) => {

    const response = await axios.put(`${BASE_HOST}`, body, {
        headers: authHeader()
    });
    return response.data
}