import { StyleSheet } from 'react-native';

import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: 1,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutButton: {
    backgroundColor: '#48495593',
  },
});

export default styles;
