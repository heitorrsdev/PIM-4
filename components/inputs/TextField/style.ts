import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  input: {
    borderColor: '#D1D5DB',
    borderRadius: 12,
    borderWidth: 1.5,
    color: colors.textPrimary,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.regular,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: '#FEF2F2',
  },
  error: {
    color: colors.error,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.regular,
    marginTop: 6,
    marginLeft: 4,
  },
});

export default styles;
