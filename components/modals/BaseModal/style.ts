import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export default StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 32,
    width: 32,
    minHeight: 32,
    minWidth: 32,
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    cursor: 'pointer',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  } as any,
  closeButtonText: {
    color: theme.colors.textSecondary,
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 24,
    textTransform: 'none',
  } as any,
  content: {
    maxHeight: 500,
    padding: 20,
  },
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
    maxWidth: 600,
    width: '90%',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  overlayPress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.large,
    fontWeight: theme.typography.fontWeight.bold,
  },
});
