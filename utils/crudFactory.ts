import { request } from '../utils';

export function createCRUD<TPayload, TResponse>(baseUrl: string) {
  return {
    list: () => request<TResponse[]>('get', `${baseUrl}/Listar`),
    add: (payload: TPayload) => request<TResponse>('post', `${baseUrl}/Adicionar`, payload),
    edit: (id: string, payload: TPayload) => request<TResponse>('put', `${baseUrl}/Editar/${id}`, payload),
    remove: (id: string) => request<void>('delete', `${baseUrl}/Excluir/${id}`),
  };
}
