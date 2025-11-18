import { request } from '@/utils';

import { Usuario, UsuarioPayload } from './usuario.types';

const BASE_URL = '/Usuario';

export const UsuarioService = {
  add(payload: UsuarioPayload): Promise<string> {
    return request<string>('post', `${BASE_URL}/Adicionar`, payload);
  },

  getByEmail(email: string): Promise<Usuario | string> {
    return request<Usuario | string>('get', `${BASE_URL}/ObterPorEmail/${email}`);
  },

  edit(id: string, payload: UsuarioPayload): Promise<string> {
    return request<string>('put', `${BASE_URL}/Editar/${id}`, payload);
  },
};
