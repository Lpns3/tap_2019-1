import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:8081/AppAMF'});

export default api;