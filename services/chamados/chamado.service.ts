import { request } from '@/utils';

import { Chamado, ChamadoPayload } from './chamado.types';

const BASE_URL = '/Chamado';

export const ChamadoService = {
  create(payload: ChamadoPayload) {
    return request<string>('post', `${BASE_URL}/Adicionar`, payload);
  },

  getAll() {
    return request<Chamado[]>('get', `${BASE_URL}/ListarChamados`);
  },

  getByEmail(email: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', `${BASE_URL}/BuscarChamadosPorEmail/${email}`);
  },

  getByStatus(status: string): Promise<Chamado[]> {
    return request<Chamado[]>('get', `${BASE_URL}/BuscarChamadosPorStatus/${status}`);
  },

  update(id: string, payload: ChamadoPayload) {
    return request<string>('put', `${BASE_URL}/Editar/${id}`, payload);
  },

  delete(id: string) {
    return request<string>('delete', `${BASE_URL}/Deletar/${id}`);
  },
};
