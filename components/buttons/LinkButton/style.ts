import { StyleSheet } from 'react-native';
import { colors, typography } from '@/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
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
    fontWeight: typography.fontWeight.medium,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});

export default styles;
