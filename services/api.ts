import axios from 'axios';

import { getToken } from '@/services/auth/storage';
import { showAlert } from '@/utils/notifications';

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

// Interceptor de resposta — trata erros globalmente
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const response = error.response;

    if (!response) {
      showAlert('Erro de rede', 'Não foi possível se conectar ao servidor.');
      return Promise.reject(error);
    }

    const status = response.status;
    const message = response.data?.message || 'Ocorreu um erro inesperado. Tente novamente.';

    if (status !== 401) {
      showAlert('Erro', message);
      return Promise.reject(error);
    }

    showAlert('Sessão expirada', 'Por favor, faça login novamente.');

    return Promise.reject(error);
  }
);

export default api;
