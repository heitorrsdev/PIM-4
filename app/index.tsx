import { Text, View, Image } from 'react-native';
import { router } from 'expo-router';

import { BaseButton } from '@/components/buttons';

import styles from './style';

export default function Home() {
  const handleNavigateToLogin = () => {
    router.push('/(public)/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>Suptech</Text>
      <Text style={styles.subtitle}>Software & Innovation</Text>
      <Text style={styles.description}>Sistema de Gerenciamento de Chamados</Text>
      
      <View style={styles.buttonContainer}>
        <BaseButton onPress={handleNavigateToLogin}>
          Acessar Sistema
        </BaseButton>
      </View>
    </View>
  );
}
