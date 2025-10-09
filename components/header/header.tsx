import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './style';

const Header: React.FC = () => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={styles.ul}>
        <Pressable>
          <Link href="/login" asChild>
            <Text style={styles.link}>Login</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link href="/register" asChild>
            <Text style={styles.link}>Registro</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
