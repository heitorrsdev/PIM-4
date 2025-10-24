import { StyleSheet } from 'react-native';
import { colors } from '@/styles';
import { typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as '700',
    marginBottom: 4,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.regular as '500',
    padding: 12,
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.regular as '400',
    marginTop: 4,
  },
});

export default styles;
