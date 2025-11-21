import React, { createContext, useEffect, useState } from 'react';

import { AuthService, LoginPayload } from '@/services';
import { registerLogoutCallback } from '@/services/api';
import { getToken, removeToken, saveToken } from '@/services/auth/storage';

interface AuthContextProps {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  isLoading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = !!token;

  useEffect(() => {
    (async (): Promise<void> => {
      const storedToken = await getToken();
      if (storedToken) {
        setToken(storedToken); // restaura a sessão se o token existir no storage
      }
      setIsLoading(false); // indica que o contexto terminou de carregar
    })();
  }, []);

  const login = async (payload: LoginPayload): Promise<void> => {
    const data = await AuthService.login(payload);

    await saveToken(data.token); // armazena o token no storage
    setToken(data.token); // atualiza o estado do token
  };

  const logout = async (): Promise<void> => {
    await removeToken();
    setToken(null);
  };

  // registra o logout global para ser usado pelo interceptor
  useEffect((): void => {
    registerLogoutCallback(logout);
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
