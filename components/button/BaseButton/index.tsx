import { Pressable, Text } from 'react-native';
import styles from './style';

export default function BaseButton({
  disabled,
  onPress,
  children,
}: {
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed, hovered }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        hovered && !disabled && styles.hovered,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
