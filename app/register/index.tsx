import { View } from 'react-native';

import styles from '../style';
import RegisterForm from './components/registerForm';

export default function RegisterScreen() {

  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}
