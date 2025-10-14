import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#3d50fdff',
    justifyContent: 'flex-start',
    paddingBottom: 9,
    paddingLeft: 50,
    paddingTop: 8,
  },

  lista: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 50,
  },

  link: {
    color: '#ffffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
