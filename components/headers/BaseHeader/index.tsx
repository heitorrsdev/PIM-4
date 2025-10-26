import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinkButton } from '@/components/buttons';

import styles from './style';
import { HeaderItem } from './type';

interface BaseHeaderProps {
  items: HeaderItem[];
  title: string;
}

export default function BaseHeader({ items, title, ...rest }: BaseHeaderProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.list}>
          {items.map(item => (
            <LinkButton key={String(item.href)} href={item.href} {...rest}>
              {item.label}
            </LinkButton>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
