import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View } from 'react-native';
import styles from './style';

interface FormFieldProps extends TextInputProps {
  label: string;
  error?: string | null;
  style?: StyleProp<TextStyle>;
}

export default function FormField({ label, error, style, ...rest }: FormFieldProps) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        {...rest}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
