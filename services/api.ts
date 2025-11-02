import axios from 'axios';

import { getToken } from '@/services/auth/storage';

const api = axios.create({
  baseURL: 'http://localhost:5165/api',
  timeout: 10000,
} );

// Adiciona token de autenticação às requisições
api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
