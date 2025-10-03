import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function BaseForm({
  children,
  onSubmit,
  submitLabel,
}: {
  children: React.ReactNode;
  onSubmit: () => void;
  submitLabel: string;
}) {
  return (
    <View style={styles.container}>
      {children}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>{submitLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
