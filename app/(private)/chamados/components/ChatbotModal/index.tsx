import React from 'react';
import { Linking, Modal, Platform, Pressable, Text, View } from 'react-native';

import styles from './style';

interface ChatbotModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ChatbotModal({ visible, onClose }: ChatbotModalProps) {
  const typebotUrl = 'https://typebot.co/suptech-ia-z7eza52';

  const openInBrowser = () => {
    Linking.openURL(typebotUrl);
    onClose();
  };

  // Para web, renderizar iframe diretamente
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

  // Para mobile, abrir no navegador externo
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.mobileContainer}>
        <View style={styles.mobileContent}>
          <Text style={styles.mobileTitle}>Assistente IA</Text>
          <Text style={styles.mobileDescription}>
            O chatbot será aberto no seu navegador
          </Text>

          <Pressable onPress={openInBrowser} style={styles.openButton}>
            <Text style={styles.openButtonText}>Abrir Chatbot</Text>
          </Pressable>

          <Pressable onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
