import { Stack } from 'expo-router';

import BaseHeader from '@/components/headers/BaseHeader';

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <BaseHeader title="Suptech" />,
      }}
    />
  );
}
