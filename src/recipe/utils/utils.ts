import axios from "axios";

export default function createAxiosClient() {
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        timeout: 5000
    });
}