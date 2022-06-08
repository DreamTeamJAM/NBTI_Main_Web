import axios from "axios";
import authHeader from '../auth/auth-header';

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta'
// const BASE_HOST = 'http://localhost:8080'

export const uploadFile = async ( body) => {

    const response = await axios.post(`${BASE_HOST}/upload`, body, {
        headers: {
            ...authHeader(),
            "Content-Type": "multipart/form-data",
        }
    });
    return response.data
}

export const downloadFile = async ( id) => {
    const response = await axios.get(`${BASE_HOST}/download/${id}`, {
        headers: authHeader(),
        responseType: 'arrayBuffer'
    });
    return response
}