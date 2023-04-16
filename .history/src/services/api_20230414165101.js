import axios from 'axios';

const api = axios.create({
    baseURL :'./lista.json'
});

export default api;