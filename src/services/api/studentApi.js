import axios from "axios";

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta/student'


export const getAllStudents = async (user) => {

    const response = await axios.get(`${BASE_HOST}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const getStudentById = async (user) => {

    const response = await axios.get(`${BASE_HOST}/${user.id}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const postStudent = async (user, body) => {

    const response = await axios.post(`${BASE_HOST}`, body, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const putStudent = async (user, body) => {

    const response = await axios.put(`${BASE_HOST}`, body, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

