import React, { createContext, useCallback, useEffect, useState } from 'react';

import { AuthService, LoginPayload } from '@/services';
import { registerLogoutCallback } from '@/services/api';
import { getToken, removeToken, saveToken } from '@/services/auth/storage';

interface AuthContextProps {
  token: string | null;
  authLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  authLoading: true,
  login: async () => {},
  logout: async () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Recupera o token na inicialização
  useEffect(() => {
    (async () => {
      const storedToken = await getToken();
      if (storedToken) {
        setToken(storedToken);
      }
      setAuthLoading(false);
    })();
  }, []);

  const login = useCallback(async (payload: LoginPayload): Promise<void> => {
    try {
      const data = await AuthService.login(payload);
      await saveToken(data.token);
      setToken(data.token);
    } catch (err) {
      throw err;
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    await removeToken();
    setToken(null);
  }, []);

  // Registra o callback de logout no serviço de API
  useEffect(() => {
    registerLogoutCallback(logout);
  }, [logout]);

  return (
    <AuthContext.Provider value={{ token, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
