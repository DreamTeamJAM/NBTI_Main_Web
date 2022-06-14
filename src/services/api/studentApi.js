import axios from "axios";
import authHeader from '../auth/auth-header';

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta'


export const getAllStudents = async () => {

    const response = await axios.get(`${BASE_HOST}/student`, {
        headers: authHeader()
    });
    return response.data
}

export const getStudentById = async ( id) => {

    const response = await axios.get(`${BASE_HOST}/student/${id}`, {
        headers: authHeader()
    });
    return response
}

export const getStudentByUserId = async ( id) => {
    
        const response = await axios.get(`${BASE_HOST}/users/${id}/student`, {
            headers: authHeader()
        });
        return response
    }

export const postStudent = async ( body) => {

    const response = await axios.post(`${BASE_HOST}/student`, body, {
        headers: authHeader()
    });
    return response.data
}

export const putStudent = async ( body) => {

    const response = await axios.put(`${BASE_HOST}/student`, body, {
        headers: authHeader()
    });
    
    return response.data
}