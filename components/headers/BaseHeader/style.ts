import { StyleSheet } from 'react-native';
import { colors } from '@/styles';
import {typography} from '@/styles';

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
    fontWeight: typography.fontWeight.bold as '700',
    letterSpacing: 1,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
