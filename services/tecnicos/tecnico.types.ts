import { UsuarioBasePayload } from '../usuarios/usuario.types';

export interface TecnicoPayload extends UsuarioBasePayload {
  especialidade: string;
}

export interface TecnicoType {
  Nome: string,
  Email: string,
  Senha: string,
  Especialidade: string,
  Telefone: string,
}
