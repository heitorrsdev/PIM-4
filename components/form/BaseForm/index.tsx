import { BaseButton } from '@/components/button';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './style';

interface BaseFormProps {
  children: React.ReactNode;
  onSubmit: () => void;
  submitLabel: string;
  isValid?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function BaseForm({ children, onSubmit, submitLabel, isValid = true, style }: BaseFormProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
      <BaseButton onPress={onSubmit} disabled={!isValid}>
        {submitLabel}
      </BaseButton>
    </View>
  );
}
