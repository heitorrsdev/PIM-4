import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

import BaseHeader from '@/components/headers/BaseHeader';
import { useAuth } from '@/hooks';

export default function PrivateLayout() {
  const { token, authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !token) {
      router.replace('/(public)/login');
    }
  }, [token, authLoading, router]);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <BaseHeader title="Suptech" />,
      }}
    />
  );
}
