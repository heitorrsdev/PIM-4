import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator,View } from 'react-native';

import { useUser } from '@/hooks';

import styles from './style';

export default function Redirect() {
  const { userType, userLoading } = useUser();

  useEffect(() => {
    if (userLoading) return;

    if (userType === 'Usuario') {
      router.replace('/(private)/chamados');
    } else if (userType === 'Tecnico') {
      router.replace('/(private)/tecnico');
    } else {
      router.replace('/login');
    }
  }, [userType, userLoading]);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}
