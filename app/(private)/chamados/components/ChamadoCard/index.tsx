import React, { useRef,useState } from 'react';
import { Dimensions,Modal, Text, TouchableOpacity, View } from 'react-native';

import { Chamado } from '@/services/chamados';

import styles from './style';

interface Props {
  chamado: Chamado;
  onEdit?: (chamado: Chamado) => void;
  onDelete?: (chamado: Chamado) => void;
  onInfo?: (chamado: Chamado) => void;
}

export function ChamadoCard({ chamado, onEdit, onDelete, onInfo }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<View>(null);

  const handleEdit = () => {
    setMenuVisible(false);
    onEdit?.(chamado);
  };

  const handleDelete = () => {
    setMenuVisible(false);
    onDelete?.(chamado);
  };

  const handleInfo = () => {
    setMenuVisible(false);
    onInfo?.(chamado);
  };

  const handleMenuPress = () => {
    const screenWidth = Dimensions.get('window').width;
    buttonRef.current?.measure((_x: number, _y: number, width: number, height: number, pageX: number, pageY: number) => {
      setMenuPosition({
        top: pageY + height + 5,
        right: screenWidth - pageX - width,
      });
      setMenuVisible(true);
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{chamado.titulo}</Text>
        <TouchableOpacity
          ref={buttonRef}
          style={styles.menuButton}
          onPress={handleMenuPress}
        >
          <Text style={styles.menuButtonText}>⋮</Text>
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <Modal
          transparent
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
          animationType="fade"
        >
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          >
            <View style={[styles.menuContainer, { position: 'absolute', top: menuPosition.top, right: menuPosition.right }]}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={handleInfo}
              >
                <Text style={styles.menuItemText}> Informações</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={handleEdit}
              >
                <Text style={styles.menuItemText}> Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.menuItem, styles.menuItemDelete]}
                onPress={handleDelete}
              >
                <Text style={[styles.menuItemText, styles.menuItemDeleteText]}> Excluir</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      <Text style={styles.desc}>{chamado.descricao}</Text>
      <Text style={styles.meta}>
        Prioridade: {chamado.prioridade} | Status: {chamado.status}
      </Text>
      <Text style={styles.meta}>Usuário: {chamado.nomeDoUsuario}</Text>
    </View>
  );
}
