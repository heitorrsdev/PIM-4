import api from '@/services/api';

const request = async <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, payload?: any): Promise<T> => {
  const { data } = await api[method]<T>(url, payload);
  return data;
};

export default request;
