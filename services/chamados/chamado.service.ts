import { request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

export const ChamadoService = {
  add(payload: ChamadoPayload): Promise<string> {
    return request('post', '/chamados/Adicionar', payload);
  },

  list(): Promise<Chamado[]> {
    return request('get', '/chamados/Listar');
  },

  edit(id: string, payload: ChamadoPayload): Promise<string> {
    return request('put', `/chamados/Editar/${id}`, payload);
  },

  remove(id: string): Promise<string> {
    return request('delete', `/chamados/Excluir/${id}`);
  },
};
