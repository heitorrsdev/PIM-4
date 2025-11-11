import { Slot } from 'expo-router';

import { AuthProvider } from '@/contexts';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
