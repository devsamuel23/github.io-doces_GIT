import axios from 'axios';

const api = axios.create({
    baseURL :'https://63069afec0d0f2b8011f9944.mockapi.io/produtos/
});

export default api;