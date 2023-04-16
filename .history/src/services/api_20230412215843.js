import axios from 'axios';

const api = axios.create({
    baseURL :'./lista'
});

export default api;