import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5165/api',
  timeout: 10000,
} );

export default api;
