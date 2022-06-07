import axios from "axios";
import authHeader from '../auth/auth-header';

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta/student'


export const getAllStudents = async () => {

    const response = await axios.get(`${BASE_HOST}`, {
        headers: authHeader()
    });
    return response.data
}

export const getStudentById = async ( id) => {
console.log(authHeader())
    const response = await axios.get(`${BASE_HOST}/${id}`, {
        headers: authHeader()
    });
    return response
}

export const postStudent = async ( body) => {

    const response = await axios.post(`${BASE_HOST}`, body, {
        headers: authHeader()
    });
    return response.data
}

export const putStudent = async ( body) => {

    const response = await axios.put(`${BASE_HOST}`, body, {
        headers: authHeader()
    });
    return response.data
}