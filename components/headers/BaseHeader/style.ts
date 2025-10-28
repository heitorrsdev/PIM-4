import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(20, 30, 48, 0.9)',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
