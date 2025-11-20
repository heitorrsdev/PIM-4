import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export default StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 32,
    justifyContent: 'center',
    width: 32,
    cursor: 'pointer',
  } as any,
  closeButtonText: {
    color: theme.colors.textSecondary,
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
  },
  content: {
    maxHeight: '80%',
    padding: 20,
    cursor: 'default',
  } as any,
  header: {
    alignItems: 'center',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    cursor: 'default',
  } as any,
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    maxHeight: '90%',
    maxWidth: 600,
    width: '90%',
    cursor: 'default',
  } as any,
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    cursor: 'pointer',
  } as any,
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
  },
});
