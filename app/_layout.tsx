import { Slot } from 'expo-router';

import { AuthProvider, ToastProvider, UserProvider  } from '@/contexts';

export default function RootLayout() {
  return (
    <AuthProvider>
      <UserProvider>
        <ToastProvider>
          <Slot />
        </ToastProvider>
      </UserProvider>
    </AuthProvider>
  );
}
