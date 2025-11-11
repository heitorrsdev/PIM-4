import { StyleSheet } from 'react-native';

import { colors } from '@/styles';

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
});

export default styles;
