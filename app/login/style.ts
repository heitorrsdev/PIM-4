import { typography } from '@/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as '700',
  }
});

export default styles;
