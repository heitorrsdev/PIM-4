import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export default StyleSheet.create({
  chamadoInfo: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    marginBottom: 20,
    padding: 16,
  },
  container: {
    paddingBottom: 20,
  },
  divider: {
    backgroundColor: '#e5e7eb',
    height: 1,
    marginVertical: 12,
  },
  infoDesc: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.normal,
    marginTop: 4,
  },
  infoLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.small,
    marginTop: 4,
  },
  infoTitle: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
    marginTop: 4,
  },
});
