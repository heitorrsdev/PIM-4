import { UsuarioBasePayload, UsuarioBaseResponse } from '../usuarios/usuario.types';

export interface TecnicoPayload extends UsuarioBasePayload {
  especialidade: string;
}

export interface TecnicoResponse extends UsuarioBaseResponse {
  especialidade: string;
}
