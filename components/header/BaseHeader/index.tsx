import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Pressable, Text, View, } from 'react-native';
import styles from './style';

const Header: React.FC = () => {
  return (
    <LinearGradient
      colors={['#274e96ff', '#3567beff']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
    <SafeAreaView edges={['top']} style={{ backgroundColor: 'transparent' }}>
        <View style={[styles.container]}>
          <View style={styles.lista}>
            <Pressable
            style={({ pressed, hovered }) => [
                styles.linkContainer,
                hovered && styles.hovered,
                pressed && styles.pressed,
              ]}
            >
              <Link href="/" asChild>
                <Text style={styles.link}>Home</Text>
              </Link>
            </Pressable>
            <Pressable
            style={({ pressed, hovered }) => [
                styles.linkContainer,
                hovered && styles.hovered,
                pressed && styles.pressed,
              ]}
            >
              <Link href="/login" asChild>
                <Text style={styles.link}>Login</Text>
              </Link>
            </Pressable>
            <Pressable
              style={({ pressed, hovered }) => [
                styles.linkContainer,
                hovered && styles.hovered,
                pressed && styles.pressed,
              ]}
            >
              <Link href="/register" asChild>
                <Text style={styles.link}>Registro</Text>
              </Link>
            </Pressable>
          </View>
          </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
