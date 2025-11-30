import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useToast, useUser } from '@/hooks';

import styles from './style';

export default function TecnicoScreen() {
  const { showToast } = useToast();
  const { userLoading, userType } = useUser();

  useEffect(() => {
    if (userLoading) return;

    if (userType !== 'Tecnico') {
      showToast('Apenas técnicos podem acessar essa tela.');
      router.replace('/(public)/login');
      return;
    }
  }, [userLoading, userType, showToast]);

  if (userLoading || userType !== 'Tecnico') {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  // O layout de abas (_layout.tsx) cuidará da renderização das telas.
  // Este componente agora serve apenas para a verificação de acesso.
  return null;
}
