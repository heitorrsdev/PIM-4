import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#0A2E50',
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
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
