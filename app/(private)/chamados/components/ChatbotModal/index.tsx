import React from 'react';
import { Modal, Platform, Pressable, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './style';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function ChatbotModal({ visible, onClose }: Props) {
  const typebotUrl = 'https://typebot.co/suptech-ia-z7eza52';

  // Para web, renderizar iframe
  if (Platform.OS === 'web') {
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={false}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Assistente IA</Text>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </Pressable>
          </View>

          <View style={styles.webviewContainer}>
            <iframe
              src={typebotUrl}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Assistente IA"
            />
          </View>
        </View>
      </Modal>
    );
  }

  // Para mobile, usar WebView dentro do app
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Assistente IA</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </Pressable>
        </View>

        <View style={styles.webviewContainer}>
          <WebView
            source={{ uri: typebotUrl }}
            style={styles.webview}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            scalesPageToFit={true}
          />
        </View>
      </View>
    </Modal>
  );
}
