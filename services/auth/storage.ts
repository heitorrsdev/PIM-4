import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'Suptech_token';

export const saveToken = async (token: string): Promise<void> => {
  if (Platform.OS === 'web') {
    localStorage.setItem(TOKEN_KEY, token);
    return;
  }
  await SecureStore.setItemAsync(TOKEN_KEY, token);
};

export const getToken = async (): Promise<string | null> => {
  if (Platform.OS === 'web') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return await SecureStore.getItemAsync(TOKEN_KEY);
};

export const removeToken = async (): Promise<void> => {
  if (Platform.OS === 'web') {
    localStorage.removeItem(TOKEN_KEY);
    return;
  }
  await SecureStore.deleteItemAsync(TOKEN_KEY);
};

// Email storage functions - provisory implementation
export const saveEmail = async (email: string): Promise<void> => {
  if (Platform.OS === 'web') {
    localStorage.setItem('Suptech_email', email);
    return;
  }
  await SecureStore.setItemAsync('Suptech_email', email);
};

export const getEmail = async (): Promise<string | null> => {
  if (Platform.OS === 'web') {
    return localStorage.getItem('Suptech_email');
  }
  return await SecureStore.getItemAsync('Suptech_email');
};

export const removeEmail = async (): Promise<void> => {
  if (Platform.OS === 'web') {
    localStorage.removeItem('Suptech_email');
    return;
  }
  await SecureStore.deleteItemAsync('Suptech_email');
};
