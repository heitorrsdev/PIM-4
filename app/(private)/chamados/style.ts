import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 12,
    fontSize: typography.fontSize.normal,
    color: colors.textSecondary,
    fontFamily: typography.fontFamily,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  aiButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 48,
    minHeight: 48,
    borderRadius: 24,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aiButtonText: {
    fontSize: typography.fontSize.normal,
    color: '#fff',
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily,
    textTransform: 'none',
  } as any,
  addButton: {
    width: 48,
    height: 48,
    minWidth: 48,
    minHeight: 48,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily,
    lineHeight: 28,
    textTransform: 'none',
  } as any,
  contentWrapper: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 60,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: typography.fontSize.normal,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default styles;
