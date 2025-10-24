import { typography } from '@/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  text: {
    color: '#fff',
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as '500',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});

export default styles;
