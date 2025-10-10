import { Stack } from 'expo-router';
import Header from '../components/header/header';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, header: () => <Header />, }}>
    </Stack>
  );
}
