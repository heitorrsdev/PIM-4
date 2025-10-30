/** Base usada por qualquer tipo de usuário do sistema */
export interface BaseUserPayload {
  email: string;
  nome: string;
  senha: string;
  telefone: string;
}

/** Tipos específicos para o Usuário comum */
export interface UsuarioPayload extends BaseUserPayload {
  setor: string;
}

export interface Usuario extends UsuarioPayload {
  usuarioID: string,
}
