import { Stack } from 'expo-router';
import Header from '../components/header/header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Stack />
    </>
  );
}
