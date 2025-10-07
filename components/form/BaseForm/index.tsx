import { BaseButton } from '@/components/button';
import { View } from 'react-native';
import styles from './style';

export default function BaseForm({
  children,
  onSubmit,
  submitLabel,
  isValid = true,
}: {
  children: React.ReactNode;
  onSubmit: () => void;
  submitLabel: string;
  isValid?: boolean;
}) {
  return (
    <View style={styles.container}>
      {children}
      <BaseButton onPress={onSubmit} disabled={!isValid}>
        {submitLabel}
      </BaseButton>
    </View>
  );
}
