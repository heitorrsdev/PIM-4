import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export default StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  badge: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: theme.typography.fontWeight.medium,
  },
  card: {
    backgroundColor: 'white',
    borderColor: '#e5e7eb',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
    marginHorizontal: 'auto',
    maxWidth: 600,
    padding: 14,
    width: '100%',
  },
  desc: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.normal,
    lineHeight: 20,
    marginTop: 8,
  },
  detailLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.normal,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: 4,
    marginTop: 12,
  },
  detailValue: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.normal,
  },
  detailsButton: {
    backgroundColor: theme.colors.textSecondary,
    flex: 1,
  },
  fullWidthButton: {
    backgroundColor: theme.colors.textSecondary,
    flex: 1,
  },
  detailsContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.small,
  },
  metaContainer: {
    gap: 4,
    marginTop: 8,
  },
  submitButton: {
    flex: 1,
  },
  title: {
    color: theme.colors.textPrimary,
    flex: 1,
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
  },
});
