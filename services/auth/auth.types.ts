export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
}

export interface Email {
  email: string;
}
