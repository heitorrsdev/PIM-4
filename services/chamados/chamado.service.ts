import { request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

const BASE_URL = '/Chamados';

export const ChamadoService = {
  add(payload: ChamadoPayload): Promise<string> {
    return request('post', `${BASE_URL}/Adicionar`, payload);
  },

  list(): Promise<Chamado[]> {
    return request('get', `${BASE_URL}/Listar`);
  },

  edit(id: string, payload: ChamadoPayload): Promise<string> {
    return request('put', `${BASE_URL}/Editar/${id}`, payload);
  },

  remove(id: string): Promise<string> {
    return request('delete', `${BASE_URL}/Deletar/${id}`);
  },
};
