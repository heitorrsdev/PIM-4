import api from '@/services/api';

export async function request<T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  payload?: any
): Promise<T> {
  const { data } = await api[method]<T>(url, payload);
  return data;
};
