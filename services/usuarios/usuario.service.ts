import { request } from '@/utils';

import { Usuario, UsuarioPayload } from './usuario.types';

const BASE_URL = '/Usuario';

export const UsuarioService = {
  list(): Promise<Usuario[] | string> {
    return request('get', `${BASE_URL}/Listar`);
  },

  add(payload: UsuarioPayload): Promise<string> {
    return request('post', `${BASE_URL}/Adicionar`, payload);
  },

  edit(id: string, payload: UsuarioPayload): Promise<string> {
    return request('put', `${BASE_URL}/Editar/${id}`, payload);
  },

  remove(id: string): Promise<string> {
    return request('delete', `${BASE_URL}/Excluir/${id}`);
  },
};
