import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  hovered: {
    borderRadius: 15,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#5061ffff',
    transform: [{ scale: 1.04 }],
  },

  lista: {
    flexDirection: 'row',
    gap: 50,
  },

  link: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  linkContainer: {
    padding: 10,
    height: 50,
    borderRadius: 10,
  },

  pressed: {
    backgroundColor: '#7381fdff',
  },
});

export default styles;
