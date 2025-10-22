import BaseHeader from '../components/header/BaseHeader';
import { HeaderItem } from '@/components/header/BaseHeader/type';
import { Stack } from 'expo-router';

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
