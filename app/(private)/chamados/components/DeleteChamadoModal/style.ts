import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  message: {
    fontSize: typography.fontSize.normal,
    color: colors.textPrimary,
    marginBottom: 12,
    lineHeight: 20,
  },
  warning: {
    fontSize: typography.fontSize.small,
    color: colors.error,
    marginBottom: 24,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.textSecondary,
  },
  cancelButtonText: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.error,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
  },
});

export default styles;
