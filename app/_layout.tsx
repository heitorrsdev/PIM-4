import { Slot } from 'expo-router';

import { AuthProvider, UserProvider } from '@/contexts';

export default function RootLayout() {
  return (
    <AuthProvider>
      <UserProvider>
        <Slot />
      </UserProvider>
    </AuthProvider>
  );
}
