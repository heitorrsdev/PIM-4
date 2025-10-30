import { BaseUserPayload } from '../usuarios/usuario.types';

export interface TecnicoPayload extends BaseUserPayload {
  especialidade: string;
}

export interface Tecnico extends TecnicoPayload {
  tecnicoID: string,
}
