import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  priorityContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  priorityButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  priorityButton: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    paddingVertical: 10,
  },
  priorityButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  priorityButtonText: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
    textAlign: 'center',
  },
  priorityButtonTextActive: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.medium,
    textAlign: 'center',
  },
});

export default styles;
