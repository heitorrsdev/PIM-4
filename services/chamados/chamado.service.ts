import { request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

const BASE_URL = '/Chamado';

export const ChamadoService = {
  add(payload: ChamadoPayload): Promise<string> {
    return request<string>('post', `${BASE_URL}/Adicionar`, payload);
  },

  getByEmail(email: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', `${BASE_URL}/ObterChamadoPorEmail/${email}`);
  },

  edit(id: string, payload: ChamadoPayload): Promise<string> {
    return request<string>('put', `${BASE_URL}/Editar/${id}`, payload);
  },

  remove(id: string): Promise<string> {
    return request<string>('delete', `${BASE_URL}/Deletar/${id}`);
  },
};
