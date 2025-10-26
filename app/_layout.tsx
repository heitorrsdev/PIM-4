import { Stack } from 'expo-router';

import { HeaderItem } from '@/components/headers/BaseHeader/type';

import BaseHeader from '../components/headers/BaseHeader';

const defaultHeaderItems: HeaderItem[] = [
  { href: '/', label: 'Home' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Registro' },
];

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <BaseHeader items={defaultHeaderItems} title='Suptech' />,
      }}
    />
  );
}
