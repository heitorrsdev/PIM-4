import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  formTitle: {
    fontSize: 28,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  formDescription: {
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  formContent: {
    width: '100%',
  },
});

export default styles;
