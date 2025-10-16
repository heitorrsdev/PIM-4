import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  hovered: {
    backgroundColor: '#5061ffff',
    borderColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    transform: [{ scale: 1.04 }],
  },

  list: {
    flexDirection: 'row',
    gap: 50,
  },

  link: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  linkContainer: {
    borderRadius: 10,
    height: 50,
    padding: 10,
  },

  pressed: {
    backgroundColor: '#7381fdff',
    borderColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default styles;
