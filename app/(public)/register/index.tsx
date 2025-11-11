import { View } from 'react-native';

import RegisterForm from './components/registerForm';
import styles from './style';

export default function RegisterScreen() {

  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}
