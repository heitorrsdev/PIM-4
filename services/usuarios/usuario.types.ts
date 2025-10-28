/** Base usada por qualquer tipo de usuário do sistema */
export interface UsuarioBasePayload {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

/** Tipos específicos para o Usuário comum */
export interface UsuarioPayload extends UsuarioBasePayload {
  setor: string;
}

export interface UsuarioType {
  Nome: string,
  Email: string,
  Senha: string,
  Setor: string,
  Telefone: string,
}
