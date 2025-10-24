import { colors, typography } from '@/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as '700',
  },
});

export default styles;
