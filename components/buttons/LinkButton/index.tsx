import { Href, Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import BaseButton from '@/components/buttons/BaseButton';

import styles from './style';

interface LinkButtonProps extends React.ComponentProps<typeof BaseButton> {
  children: React.ReactNode;
  href: Href;
};

export default function LinkButton({ href, children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} asChild>
      <BaseButton style={styles.button} {...rest}>
        <Text>{children}</Text>
      </BaseButton>
    </Link>
  );
}
