import React, { createContext, useEffect, useState } from 'react';

import { showToastGlobal } from '@/contexts';
import { useAuth } from '@/hooks';
import { AuthService, Tecnico, TecnicoService, Usuario } from '@/services';
import { Email } from '@/services/auth';
import { UsuarioService } from '@/services/usuarios/usuario.service';

interface UserContextProps {
  user: Usuario | Tecnico | null;
  userLoading: boolean;
  refreshUser: () => Promise<void>;
  userType: 'Usuario' | 'Tecnico' | null;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  userLoading: true,
  refreshUser: async () => {},
  userType: null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState<Usuario | Tecnico | null>(null);
  const [userType, setUserType] = useState<'Usuario' | 'Tecnico' | null>(null);
  const { token } = useAuth();

  const loadUser = async (): Promise<void> => {
    setUserLoading(true);

    if (!token) {
      setUser(null);
      setUserType(null);
      setUserLoading(false);
      return;
    }

    try {
      const emailResponse: Email | string = await AuthService.getEmailByToken(token);
      const email = typeof emailResponse === 'string' ? null : emailResponse.email;

      if (!email) {
        setUser(null);
        setUserType(null);
        setUserLoading(false);
        return;
      }

      const usuario: Usuario | null = await UsuarioService.getByEmail(email).catch(() => null);

      const tecnico: Tecnico | null = usuario
        ? null
        : await TecnicoService.getByEmail(email).catch(() => null);

      const resolvedUser = usuario || tecnico || null;

      setUser(resolvedUser);
      setUserType(tecnico ? 'Tecnico' : usuario ? 'Usuario' : null);
    } catch {
      showToastGlobal('Não foi possível carregar os dados do usuário.');
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    if (token) loadUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, userType, userLoading, refreshUser: loadUser }}>
      {children}
    </UserContext.Provider>
  );
};
