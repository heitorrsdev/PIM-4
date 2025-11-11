import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BaseButton, LinkButton } from '@/components/buttons';
import { useAuth } from '@/hooks';

import styles from './style';
import { HeaderItem } from './type';

interface BaseHeaderProps {
  items?: HeaderItem[];
  title: string;
}

export default function BaseHeader({ items, title, ...rest }: BaseHeaderProps) {
  const { logout, isAuthenticated } = useAuth();

  async function handleLogout(): Promise<void> {
    await logout();
    router.replace('/(public)/login');
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {items &&
          <View style={styles.list}>
            {items.map(item => (
              <LinkButton key={String(item.href)} href={item.href} {...rest}>
                {item.label}
              </LinkButton>
            ))}
          </View>
        }
        {isAuthenticated &&
          <BaseButton onPress={handleLogout} style={styles.logoutButton}>
            Sair
          </BaseButton>
        }
      </View>
    </SafeAreaView>
  );
}
