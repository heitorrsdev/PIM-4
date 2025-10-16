import { Stack } from 'expo-router';
import Header from '../components/header/BaseHeader';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
    />
  );
}
