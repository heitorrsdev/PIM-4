import { request } from '@/utils';

import { Usuario, UsuarioPayload } from './usuario.types';

const BASE_URL = '/Usuario';

export const UsuarioService = {
  create(payload: UsuarioPayload): Promise<string> {
    return request<string>('post', `${BASE_URL}/Adicionar`, payload);
  },

  getByEmail(email: string): Promise<Usuario> {
    return request<Usuario>('get', `${BASE_URL}/ObterPorEmail/${email}`);
  },

  update(id: string, payload: UsuarioPayload): Promise<string> {
    return request<string>('put', `${BASE_URL}/Editar/${id}`, payload);
  },
};
