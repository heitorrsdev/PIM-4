import BaseButton from '../BaseButton';
import React from 'react';
import styles from './style';
import { Link, Href } from 'expo-router';
import { Text } from 'react-native';

interface LinkButtonProps extends React.ComponentProps<typeof BaseButton> {
  children: React.ReactNode;
  href: Href;
};

export default function LinkButton({ href, children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} asChild>
      <BaseButton style={styles.button} {...rest}>
        <Text style={styles.text}>{children}</Text>
      </BaseButton>
    </Link>
  );
}
