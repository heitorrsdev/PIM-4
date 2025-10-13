import React from 'react';
import { Pressable, PressableProps, StyleProp, Text, ViewStyle } from 'react-native';
import styles from './style';

// Pressable é baseado em View, então a prop `style` recebe estilos de View.
interface BaseButtonProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function BaseButton({ children, disabled, style, ...rest }: BaseButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed, hovered }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        hovered && !disabled && styles.hovered,
        style,
      ]}
      {...rest}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
