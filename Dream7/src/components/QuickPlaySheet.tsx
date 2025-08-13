import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors, Spacing, Radius } from '../theme/tokens';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function QuickPlaySheet({ visible, onClose }: Props) {
  return (
    <Modal transparent visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Quick Play</Text>
          <Text style={styles.subtitle}>Jump into a game instantly.</Text>
          <Pressable style={styles.close} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.background,
    padding: Spacing.xl,
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
  },
  title: { fontSize: 18, fontWeight: '700', color: Colors.text },
  subtitle: { marginTop: 6, color: Colors.textMuted },
  close: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: Radius.md,
    alignItems: 'center',
  },
  closeText: { color: '#2A0E47', fontWeight: '700' },
});
