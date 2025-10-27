import React, { createContext, useEffect, useState } from 'react';

import { AuthService , LoginPayload } from '@/services';
import api from '@/services/api';
import { getToken } from '@/services/auth';

interface AuthContextProps {
  token: string | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const isAuthenticated = !!token;

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getToken();
      if (storedToken) {
        setToken(storedToken);
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;
      }
    };
    loadToken();
  }, []);

  const login = async (payload: LoginPayload) => {
    const data = await AuthService.login(payload);
    setToken(data.token);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
  };

  const logout = async () => {
    await AuthService.logout();
    setToken(null);
    delete api.defaults.headers.Authorization;
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
