import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

import BaseHeader from '@/components/headers/BaseHeader';
import { useAuth } from '@/hooks';

export default function PrivateLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/(public)/login');
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <BaseHeader title="Suptech" />,
      }}
    />
  );
}
