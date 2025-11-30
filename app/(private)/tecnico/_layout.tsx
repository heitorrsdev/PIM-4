import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { colors } from '@/styles';

export default function TecnicoLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: '#e0e0e0',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="abertos"
        options={{
          title: 'Em Aberto',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meus"
        options={{
          title: 'Meus Chamados',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-check" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="resolvidos"
        options={{
          title: 'Resolvidos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="check-decagram" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
