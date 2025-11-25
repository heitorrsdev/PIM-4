import axios from 'axios';

import { showToastGlobal } from '@/contexts';
import { getToken } from '@/services/auth/storage';

let logoutCallback: (() => Promise<void>) | null = null;

export const registerLogoutCallback = (fn: () => Promise<void>) => {
  logoutCallback = fn;
};

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5165/api',
  timeout: 10000,
});

// Adiciona token de autenticação às requisições
api.interceptors.request.use(
  async (config) => {
    const token: string | null = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de resposta — trata erros globalmente
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const response = error.response;

    if (!response) {
      showToastGlobal('Não foi possível se conectar ao servidor.');
      return Promise.reject(error);
    }

    const status: number = response.status;
    const message: string = response.data?.message || 'Ocorreu um erro inesperado. Tente novamente.';

    if (status === 403) {
      showToastGlobal('Por favor, faça login novamente.');

      if (logoutCallback) {
        await logoutCallback();
      }
    }

    return Promise.reject({
      status,
      message,
      original: error,
    });
  }
);

export default api;
