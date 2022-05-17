import axios from "axios";

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta/company'


export const getAllCompanies = async (user) => {

    const response = await axios.get(`${BASE_HOST}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const getCompanyById = async (user, id) => {

    const response = await axios.get(`${BASE_HOST}/${id}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const postCompany = async (user, body) => {

    const response = await axios.post(`${BASE_HOST}`, body, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

export const putCompany = async (user, body) => {

    const response = await axios.put(`${BASE_HOST}`, body, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return response.data
}

