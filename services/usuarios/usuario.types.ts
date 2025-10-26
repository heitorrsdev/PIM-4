/** Base usada por qualquer tipo de usuário do sistema */
export interface UsuarioBasePayload {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

export interface UsuarioBaseResponse extends UsuarioBasePayload {
  id: string;
}

/** Tipos específicos para o Usuário comum */
export interface UsuarioPayload extends UsuarioBasePayload {
  setor: string;
}

export interface UsuarioResponse extends UsuarioBaseResponse {
  setor: string;
}
