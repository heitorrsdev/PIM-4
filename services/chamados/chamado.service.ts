import { buildUrl, request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

const BASE_URL = '/Chamado';

export const ChamadoService = {
  create(payload: ChamadoPayload) {
    return request<string>('post', buildUrl(BASE_URL, '/Adicionar'), payload);
  },

  getAll() {
    return request<Chamado[]>('get', buildUrl(BASE_URL, '/ListarChamados'));
  },

  getByEmail(email: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', buildUrl(BASE_URL, '/BuscarChamadosPorEmail', email));
  },

  getByStatus(status: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', buildUrl(BASE_URL, '/BuscarChamadosPorStatus', status));
  },

  update(id: string, payload: ChamadoPayload) {
    return request<string>('put', buildUrl(BASE_URL, '/Editar', id), payload);
  },

  delete(id: string) {
    return request<string>('delete', buildUrl(BASE_URL, '/Excluir', id));
  },
};
