import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BaseButton } from '@/components/buttons';
import { useAuth } from '@/hooks';

import styles from './style';

interface BaseHeaderProps {
  title: string;
  showLogout?: boolean;
}

export default function BaseHeader({ title, showLogout = false, ...rest }: BaseHeaderProps) {
  const { logout, token } = useAuth();

  async function handleLogout(): Promise<void> {
    await logout();
    router.replace('/(public)/login');
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {showLogout && token &&
          <BaseButton onPress={handleLogout} style={styles.logoutButton}>
            Sair
          </BaseButton>
        }
      </View>
    </SafeAreaView>
  );
}
