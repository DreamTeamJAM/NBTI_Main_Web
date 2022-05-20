import axios from "axios";

const BASE_HOST = 'https://34vznuxt9f.execute-api.eu-west-1.amazonaws.com/beta'
// const BASE_HOST = 'http://localhost:8080'

export const uploadFile = async (user, body) => {

    const response = await axios.post(`${BASE_HOST}/upload`, body,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
        auth: {
            username: user.username,
            password: user.password
        }
    });
    alert("File uploaded successfully.")
    return response.data
}

export const downloadFile = async (user, id) => {
    const response = await axios.get(`${BASE_HOST}/download/${id}`, {
        auth: {
            username: user.username,
            password: user.password
        },
        responseType: 'arrayBuffer'
    });
    return response
}