import axios from 'axios';
const BASE_URL = 'http://localhost:3000'; //mudar quando em produção

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});